// prisma/seed-data.ts

export type SeedInstitution = {
  slug: string;
  name: string;
  city?: string;
  websiteUrl?: string;
};

export type SeedCourse = {
  slug: string;
  title: string;
  caoCode: string;
  degreeType: string;
  durationYears: number;
  subject: string;    // e.g. "Computing"
  awardLevel: 6 | 7 | 8;
  institutionSlug: string; // references SeedInstitution.slug
};

export const seedInstitutions: SeedInstitution[] = [
  { slug: "ucd", name: "University College Dublin", city: "Dublin", websiteUrl: "https://www.ucd.ie" },
  { slug: "mu",  name: "Maynooth University",       city: "Maynooth", websiteUrl: "https://www.maynoothuniversity.ie" },
  { slug: "tu",  name: "TU Dublin",                 city: "Dublin", websiteUrl: "https://www.tudublin.ie" },
];

export const seedCourses: SeedCourse[] = [
  // UCD
  { slug: "dn700-bsc-computer-science", title: "BSc Computer Science", caoCode: "DN700", degreeType: "BSc", durationYears: 4, subject: "Computing",  awardLevel: 8, institutionSlug: "ucd" },
  { slug: "dn650-science",              title: "BSc Science",          caoCode: "DN200", degreeType: "BSc", durationYears: 4, subject: "Science",    awardLevel: 8, institutionSlug: "ucd" },
  { slug: "ucd-eng-l6",                 title: "Cert in Engineering",  caoCode: "DN120", degreeType: "Cert", durationYears: 2, subject: "Engineering",awardLevel: 6, institutionSlug: "ucd" },

  // Maynooth
  { slug: "mh101-arts-ba",              title: "BA Arts",              caoCode: "MH101", degreeType: "BA",  durationYears: 3, subject: "Arts",       awardLevel: 8, institutionSlug: "mu" },
  { slug: "mh601-computer-science",     title: "BSc Computer Science", caoCode: "MH601", degreeType: "BSc", durationYears: 4, subject: "Computing",  awardLevel: 8, institutionSlug: "mu" },
  { slug: "mh404-business",             title: "BBS Business",         caoCode: "MH404", degreeType: "BBS", durationYears: 3, subject: "Business",   awardLevel: 8, institutionSlug: "mu" },

  // TU Dublin
  { slug: "tu756-hcert-computing",      title: "Higher Cert Computing",caoCode: "TU756", degreeType: "Cert",durationYears: 2, subject: "Computing",  awardLevel: 6, institutionSlug: "tu" },
  { slug: "tu123-mechanical-eng",       title: "BEng Mechanical Eng",  caoCode: "TU123", degreeType: "BEng",durationYears: 4, subject: "Engineering",awardLevel: 8, institutionSlug: "tu" },
  { slug: "tu430-media-studies",        title: "BA Media Studies",     caoCode: "TU430", degreeType: "BA",  durationYears: 3, subject: "Arts",       awardLevel: 7, institutionSlug: "tu" },
];