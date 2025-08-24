
#!/usr/bin/env python3
# Load programmes from CSV into Postgres (MVP schema).
# Usage:
#   export PGHOST=localhost PGPORT=5432 PGDATABASE=college_insider PGUSER=ci_user PGPASSWORD=ci_pass
#   pip install psycopg2-binary pandas
#   python etl_load_programmes.py programmes_template.csv

import sys, os
import pandas as pd
import psycopg2

def get_conn():
    return psycopg2.connect(
        host=os.getenv("PGHOST","localhost"),
        port=os.getenv("PGPORT","5432"),
        dbname=os.getenv("PGDATABASE","college_insider"),
        user=os.getenv("PGUSER","ci_user"),
        password=os.getenv("PGPASSWORD","ci_pass")
    )

def upsert(cur, df):
    # Ensure institutions exist; map to ids
    inst_ids = {}
    for name in sorted(set(df["institution_name"].dropna())):
        cur.execute("INSERT INTO institution (name) VALUES (%s) ON CONFLICT (name) DO NOTHING;", (name,))
        cur.execute("SELECT id FROM institution WHERE name=%s;", (name,))
        inst_ids[name] = cur.fetchone()[0]

    for _, r in df.iterrows():
        inst_id = inst_ids[r["institution_name"]]
        cur.execute("""
            INSERT INTO programme (
                institution_id, cao_code, title, nfq_level, award,
                duration_years, delivery_mode, restricted, description, last_verified_at
            )
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,NOW())
            ON CONFLICT (institution_id, cao_code)
            DO UPDATE SET title=EXCLUDED.title, nfq_level=EXCLUDED.nfq_level, award=EXCLUDED.award,
                          duration_years=EXCLUDED.duration_years, delivery_mode=EXCLUDED.delivery_mode,
                          restricted=EXCLUDED.restricted, description=EXCLUDED.description, last_verified_at=NOW()
            RETURNING id;
        """, (
            inst_id, r.get("cao_code"), r.get("title"),
            int(r["nfq_level"]) if pd.notnull(r.get("nfq_level")) else None,
            r.get("award"),
            float(r["duration_years"]) if pd.notnull(r.get("duration_years")) else None,
            r.get("delivery_mode"),
            bool(r.get("restricted")) if pd.notnull(r.get("restricted")) else False,
            r.get("description"),
        ))
        prog_id = cur.fetchone()[0]
        # refresh options
        cur.execute("DELETE FROM programme_option WHERE programme_id=%s;", (prog_id,))
        opts = str(r.get("programme_options") or "").strip()
        if opts:
            for opt in [o.strip() for o in opts.split("|") if o.strip()]:
                cur.execute("INSERT INTO programme_option (programme_id, title) VALUES (%s,%s);", (prog_id, opt))

def main():
    if len(sys.argv) < 2:
        print("Usage: python etl_load_programmes.py programmes.csv")
        sys.exit(1)
    csv = sys.argv[1]
    df = pd.read_csv(csv)
    with get_conn() as conn:
        with conn.cursor() as cur:
            upsert(cur, df)
        conn.commit()
    print(f"Loaded {len(df)} rows from {csv}")

if __name__ == "__main__":
    main()
