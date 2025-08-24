
INSERT INTO institution (name, aka, website) VALUES
 ('University College Dublin','UCD','https://www.ucd.ie'),
 ('Trinity College Dublin','TCD','https://www.tcd.ie'),
 ('Dublin City University','DCU','https://www.dcu.ie'),
 ('Technological University Dublin','TUD','https://www.tudublin.ie'),
 ('Maynooth University','MU','https://www.maynoothuniversity.ie'),
 ('University of Galway','UG','https://www.universityofgalway.ie'),
 ('University College Cork','UCC','https://www.ucc.ie'),
 ('University of Limerick','UL','https://www.ul.ie')
ON CONFLICT (name) DO NOTHING;
