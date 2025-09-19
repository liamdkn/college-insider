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
  degreeType?: string;        // maps -> award (BA/BSc/Higher Cert etc.)
  department?: string;        // e.g., "School of Psychology"
  durationYears?: number;
  deliveryMode?: "FULL_TIME" | "PART_TIME" | "BLENDED" | "ONLINE";
  restricted?: boolean;
  description?: string;
  courseUrl?: string;
  campusSlug?: string;
  institutionSlug?: string;   // fallback if no campusSlug
};

// -------------------------
// Institutions (>= 6)
// -------------------------
export const seedInstitutions: SeedInstitution[] = [
  { slug: "maynooth-university", name: "Maynooth University", aka: "MU", websiteUrl: "https://www.maynoothuniversity.ie/" },
  { slug: "ucd", name: "University College Dublin", aka: "UCD", websiteUrl: "https://www.ucd.ie/" },
  { slug: "tcd", name: "Trinity College Dublin", aka: "TCD", websiteUrl: "https://www.tcd.ie/" },
  { slug: "university-of-galway", name: "University of Galway", websiteUrl: "https://www.universityofgalway.ie/" },
  { slug: "ul", name: "University of Limerick", aka: "UL", websiteUrl: "https://www.ul.ie/" },
  { slug: "tudublin", name: "Technological University Dublin", aka: "TU Dublin", websiteUrl: "https://www.tudublin.ie/" },
  { slug: "mtu", name: "Munster Technological University", aka: "MTU", websiteUrl: "https://www.mtu.ie/" },
];

// -------------------------
// Campuses (some institutions with multiple campuses)
// -------------------------
export const seedCampuses: SeedCampus[] = [
  // Maynooth
  { slug: "maynooth-main-campus", name: "Main Campus", city: "Maynooth", institutionSlug: "maynooth-university" },

  // UCD
  { slug: "ucd-belfield", name: "Belfield Campus", city: "Dublin", institutionSlug: "ucd" },
  { slug: "ucd-blackrock", name: "Blackrock Campus", city: "Dublin", institutionSlug: "ucd" },

  // TCD
  { slug: "tcd-main", name: "City Centre Campus", city: "Dublin", institutionSlug: "tcd" },

  // University of Galway
  { slug: "galway-nuns-island", name: "Nuns' Island", city: "Galway", institutionSlug: "university-of-galway" },

  // UL
  { slug: "ul-castletroy", name: "Castletroy Campus", city: "Limerick", institutionSlug: "ul" },

  // TU Dublin (multi-campus)
  { slug: "tud-grangegorman", name: "Grangegorman", city: "Dublin", institutionSlug: "tudublin" },
  { slug: "tud-tallaght", name: "Tallaght", city: "Dublin", institutionSlug: "tudublin" },
  { slug: "tud-blanchardstown", name: "Blanchardstown", city: "Dublin", institutionSlug: "tudublin" },

  // MTU (Cork + Kerry)
  { slug: "mtu-bishopstown", name: "Bishopstown (Cork)", city: "Cork", institutionSlug: "mtu" },
  { slug: "mtu-tralee", name: "Tralee (Kerry)", city: "Tralee", institutionSlug: "mtu" },
];

// -------------------------
// Courses (mixed award levels 6/7/8, various durations & modes)
// -------------------------
export const seedCourses: SeedCourse[] = [
  // Maynooth
  {
    slug: "mh106-ba-psychology",
    title: "BA Psychology",
    caoCode: "MH106",
    awardLevel: 8,
    degreeType: "BA",
    department: "Department of Psychology",
    durationYears: 3,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Undergraduate degree in Psychology at Maynooth University.",
    courseUrl: "https://www.maynoothuniversity.ie/study-maynooth/undergraduate-studies/courses/ba-psychology",
    campusSlug: "maynooth-main-campus",
  },
  {
    slug: "mh209-bsc-computer-science",
    title: "BSc Computer Science",
    caoCode: "MH209",
    awardLevel: 8,
    degreeType: "BSc",
    department: "Department of Computer Science",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Computer Science with software development pathways.",
    courseUrl: "https://www.maynoothuniversity.ie/",
    campusSlug: "maynooth-main-campus",
  },

  // UCD
  {
    slug: "dn200-bsc-science",
    title: "BSc Science",
    caoCode: "DN200",
    awardLevel: 8,
    degreeType: "BSc",
    department: "College of Science",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Common entry Science degree with multiple subject options.",
    courseUrl: "https://www.ucd.ie/courses/science",
    campusSlug: "ucd-belfield",
  },
  {
    slug: "dn700-bcomm",
    title: "BComm (Commerce)",
    caoCode: "DN700",
    awardLevel: 8,
    degreeType: "BComm",
    department: "UCD Lochlann Quinn School of Business",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Undergraduate commerce degree covering accounting, finance, and management.",
    courseUrl: "https://www.ucd.ie/",
    campusSlug: "ucd-blackrock",
  },

  // TCD
  {
    slug: "tr009-ba-english-studies",
    title: "BA English Studies",
    caoCode: "TR009",
    awardLevel: 8,
    degreeType: "BA",
    department: "School of English",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Study English language and literature at Trinity.",
    courseUrl: "https://www.tcd.ie/",
    campusSlug: "tcd-main",
  },
  {
    slug: "tr009-higher-cert-arts",
    title: "Higher Certificate in Arts",
    caoCode: "TR099",
    awardLevel: 6,
    degreeType: "Higher Cert",
    department: "School of Arts, Humanities and Social Sciences",
    durationYears: 2,
    deliveryMode: "PART_TIME",
    restricted: false,
    description: "Introductory arts programme (NFQ Level 6).",
    courseUrl: "https://www.tcd.ie/",
    campusSlug: "tcd-main",
  },

  // University of Galway
  {
    slug: "gy301-beng-mechanical",
    title: "BE Mechanical Engineering",
    caoCode: "GY301",
    awardLevel: 8,
    degreeType: "BE",
    department: "School of Engineering",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Mechanical Engineering degree with industry placements.",
    courseUrl: "https://www.universityofgalway.ie/",
    campusSlug: "galway-nuns-island",
  },

  // UL
  {
    slug: "lm121-bsc-computer-science",
    title: "BSc Computer Science",
    caoCode: "LM121",
    awardLevel: 8,
    degreeType: "BSc",
    department: "Department of Computer Science and Information Systems",
    durationYears: 4,
    deliveryMode: "BLENDED",
    restricted: false,
    description: "Software engineering and data science pathways.",
    courseUrl: "https://www.ul.ie/",
    campusSlug: "ul-castletroy",
  },
  {
    slug: "lm110-hdip-education",
    title: "Higher Diploma in Education",
    caoCode: "LM110",
    awardLevel: 7,
    degreeType: "HDip",
    department: "School of Education",
    durationYears: 1,
    deliveryMode: "ONLINE",
    restricted: false,
    description: "Graduate conversion course for education.",
    courseUrl: "https://www.ul.ie/",
    campusSlug: "ul-castletroy",
  },

  // TU Dublin (multi-campus)
  {
    slug: "tu805-beng-electrical",
    title: "BEng Electrical Engineering",
    caoCode: "TU805",
    awardLevel: 7,
    degreeType: "BEng",
    department: "School of Electrical and Electronic Engineering",
    durationYears: 3,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Electrical and electronic engineering core modules.",
    courseUrl: "https://www.tudublin.ie/",
    campusSlug: "tud-blanchardstown",
  },
  {
    slug: "tu865-bsc-computing",
    title: "BSc Computing",
    caoCode: "TU865",
    awardLevel: 8,
    degreeType: "BSc",
    department: "School of Computer Science",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Computing degree with specialisms in AI and Cybersecurity.",
    courseUrl: "https://www.tudublin.ie/",
    campusSlug: "tud-grangegorman",
  },
  {
    slug: "tu672-higher-cert-science",
    title: "Higher Certificate in Science",
    caoCode: "TU672",
    awardLevel: 6,
    degreeType: "Higher Cert",
    department: "School of Science",
    durationYears: 2,
    deliveryMode: "PART_TIME",
    restricted: false,
    description: "NFQ 6 certificate in applied science.",
    courseUrl: "https://www.tudublin.ie/",
    campusSlug: "tud-tallaght",
  },

  // MTU (Cork + Kerry)
  {
    slug: "cr106-bsc-software-development",
    title: "BSc Software Development",
    caoCode: "CR106",
    awardLevel: 8,
    degreeType: "BSc",
    department: "Department of Computer Science",
    durationYears: 4,
    deliveryMode: "FULL_TIME",
    restricted: false,
    description: "Software development with industry-aligned projects.",
    courseUrl: "https://www.mtu.ie/",
    campusSlug: "mtu-bishopstown",
  },
  {
    slug: "kt125-creative-media",
    title: "Higher Cert in Creative Media",
    caoCode: "KT125",
    awardLevel: 6,
    degreeType: "Higher Cert",
    department: "Department of Creative Media",
    durationYears: 2,
    deliveryMode: "FULL_TIME",
    restricted: true, // audition/portfolio required (example)
    description: "Creative media production with portfolio requirements.",
    courseUrl: "https://www.mtu.ie/",
    campusSlug: "mtu-tralee",
  },
];