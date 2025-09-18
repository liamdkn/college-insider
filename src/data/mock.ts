// src/data/mock.ts
export type Institution = {
  slug: string;
  name: string;
  city?: string;
};

export const institutions: Institution[] = [
  { slug: "ucd", name: "University College Dublin", city: "Dublin" },
  { slug: "mu", name: "Maynooth University", city: "Maynooth" },
  { slug: "tu", name: "TU Dublin", city: "Dublin" },
];

//
export type Course = {
  slug: string;
  title: string;
  caoCode: string;
  institution: string;
  degreeType: string;
  durationYears: number;
  subject: "Computing" | "Engineering" | "Business" | "Arts" | "Science";  // etc.
  awardLevel: 6 | 7 | 8;
};

export const SUBJECTS = ["Computing", "Engineering", "Business", "Arts", "Science"] as const;
export const INSTITUTIONS = ["University College Dublin", "Maynooth University", "TU Dublin"] as const;

// src/data/mock.ts

export const courses: Course[] = [
  {
    slug: "dn700-bsc-computer-science",
    title: "BSc in Computer Science",
    caoCode: "DN700",
    institution: "University College Dublin",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Computing",
    awardLevel: 8,
  },
  {
    slug: "mh201-bsc-computer-science",
    title: "BSc in Computer Science",
    caoCode: "MH201",
    institution: "Maynooth University",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Computing",
    awardLevel: 8,
  },
  {
    slug: "tu856-bsc-software-development",
    title: "BSc in Software Development",
    caoCode: "TU856",
    institution: "TU Dublin",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Computing",
    awardLevel: 8,
  },
  {
    slug: "dn610-higher-cert-business",
    title: "Higher Certificate in Business",
    caoCode: "DN610",
    institution: "University College Dublin",
    degreeType: "Higher Cert",
    durationYears: 2,
    subject: "Business",
    awardLevel: 6,
  },
  {
    slug: "mh101-ba-arts",
    title: "BA in Arts",
    caoCode: "MH101",
    institution: "Maynooth University",
    degreeType: "BA",
    durationYears: 3,
    subject: "Arts",
    awardLevel: 8,
  },
  {
    slug: "tu755-beng-mechanical",
    title: "BEng in Mechanical Engineering",
    caoCode: "TU755",
    institution: "TU Dublin",
    degreeType: "BEng",
    durationYears: 4,
    subject: "Engineering",
    awardLevel: 8,
  },
  {
    slug: "dn200-bsc-science",
    title: "BSc in Science",
    caoCode: "DN200",
    institution: "University College Dublin",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Science",
    awardLevel: 8,
  },
  {
    slug: "mh502-bba-business",
    title: "BBA in Business Administration",
    caoCode: "MH502",
    institution: "Maynooth University",
    degreeType: "BBA",
    durationYears: 4,
    subject: "Business",
    awardLevel: 8,
  },
  {
    slug: "tu654-bsc-cybersecurity",
    title: "BSc in Cybersecurity",
    caoCode: "TU654",
    institution: "TU Dublin",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Computing",
    awardLevel: 8,
  },
  {
    slug: "dn120-higher-cert-engineering",
    title: "Higher Certificate in Engineering",
    caoCode: "DN120",
    institution: "University College Dublin",
    degreeType: "Higher Cert",
    durationYears: 2,
    subject: "Engineering",
    awardLevel: 6,
  },
  {
    slug: "mh304-bsc-biology",
    title: "BSc in Biology",
    caoCode: "MH304",
    institution: "Maynooth University",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Science",
    awardLevel: 8,
  },
  {
    slug: "tu421-ba-media",
    title: "BA in Media Studies",
    caoCode: "TU421",
    institution: "TU Dublin",
    degreeType: "BA",
    durationYears: 3,
    subject: "Arts",
    awardLevel: 7,
  },
  {
    slug: "dn230-bsc-finance",
    title: "BSc in Finance",
    caoCode: "DN230",
    institution: "University College Dublin",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Business",
    awardLevel: 8,
  },
  {
    slug: "mh405-bsc-physics",
    title: "BSc in Physics",
    caoCode: "MH405",
    institution: "Maynooth University",
    degreeType: "BSc",
    durationYears: 4,
    subject: "Science",
    awardLevel: 8,
  },
  {
    slug: "tu999-higher-cert-computing",
    title: "Higher Cert in Computing",
    caoCode: "TU999",
    institution: "TU Dublin",
    degreeType: "Higher Cert",
    durationYears: 2,
    subject: "Computing",
    awardLevel: 6,
  },
];