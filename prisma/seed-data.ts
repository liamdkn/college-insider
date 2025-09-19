export type SeedInstitution = {
  slug: string;
  name: string;
  aka?: string;
  websiteUrl?: string;
  countryCode?: string;
};

export type SeedCampus = {
  slug: string;
  name: string;
  city?: string;
  address?: string;
  institutionSlug: string;
};

export type SeedCourse = {
  slug: string;
  title: string;
  caoCode?: string;
  awardLevel?: number;        // maps -> nfqLevel
  degreeType?: string;        // maps -> award
  durationYears?: number;
  deliveryMode?: "FULL_TIME" | "PART_TIME" | "BLENDED" | "ONLINE";
  restricted?: boolean;
  description?: string;
  courseUrl?: string;
  campusSlug?: string;
  institutionSlug?: string;   // fallback if no campusSlug
};

export const seedInstitutions: SeedInstitution[] = [
  {
    slug: "maynooth-university",
    name: "Maynooth University",
    aka: "MU",
    websiteUrl: "https://www.maynoothuniversity.ie/",
  },
  {
    slug: "ucd",
    name: "University College Dublin",
    aka: "UCD",
    websiteUrl: "https://www.ucd.ie/",
  },
];

export const seedCampuses: SeedCampus[] = [
  {
    slug: "maynooth-main-campus",
    name: "Main Campus",
    city: "Maynooth",
    institutionSlug: "maynooth-university",
  },
  {
    slug: "ucd-belfield",
    name: "Belfield Campus",
    city: "Dublin",
    institutionSlug: "ucd",
  },
];

export const seedCourses: SeedCourse[] = [
  {
    slug: "mh106-ba-psychology",
    title: "BA Psychology",
    caoCode: "MH106",
    awardLevel: 8,
    degreeType: "BA",
    durationYears: 3,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Undergraduate degree in Psychology at Maynooth University.",
    courseUrl:
      "https://www.maynoothuniversity.ie/study-maynooth/undergraduate-studies/courses/ba-psychology",
    campusSlug: "maynooth-main-campus",
  },
  {
    slug: "dn200-bsc-science",
    title: "BSc Science",
    caoCode: "DN200",
    awardLevel: 8,
    degreeType: "BSc",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description:
      "Common entry Science degree with multiple subject options (e.g., Maths, Physics, Chemistry).",
    courseUrl: "https://www.ucd.ie/courses/science",
    campusSlug: "ucd-belfield",
  },
];