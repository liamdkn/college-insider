// prisma/seed-data.ts

export type SeedInstitution = {
  slug: string;
  name: string;
  city?: string;
  websiteUrl?: string;
  caoCode?: string;
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
  // Universities (NUI & State)
  { slug: "trinity-college-dublin",            name: "Trinity College Dublin",                                      city: "Dublin",    websiteUrl: "https://www.tcd.ie",                         caoCode: "TR" },
  { slug: "university-college-dublin",         name: "University College Dublin",                                   city: "Dublin",    websiteUrl: "https://www.ucd.ie",                         caoCode: "DN" },
  { slug: "university-college-cork",           name: "University College Cork",                                     city: "Cork",      websiteUrl: "https://www.ucc.ie/en/",                     caoCode: "CK" },
  { slug: "university-of-galway",              name: "University of Galway",                                        city: "Galway",    websiteUrl: "https://www.universityofgalway.ie",          caoCode: "GY" },
  { slug: "maynooth-university",               name: "Maynooth University",                                         city: "Maynooth",  websiteUrl: "https://www.maynoothuniversity.ie",          caoCode: "MH" },
  { slug: "university-of-limerick",            name: "University of Limerick",                                      city: "Limerick",  websiteUrl: "https://www.ul.ie",                           caoCode: "LM" },
  { slug: "rcsi",                               name: "RCSI University of Medicine & Health Sciences",               city: "Dublin",    websiteUrl: "https://www.rcsi.com",                       caoCode: "RC" },

  // Technological Universities
  { slug: "technological-university-dublin",   name: "Technological University Dublin",                             city: "Dublin",    websiteUrl: "https://www.tudublin.ie",                    caoCode: "TU" },
  { slug: "munster-technological-university",  name: "Munster Technological University",                            city: "Cork",      websiteUrl: "https://www.mtu.ie",                          caoCode: "MT" },
  { slug: "south-east-technological-university", name: "South East Technological University",                       city: "Waterford", websiteUrl: "https://www.setu.ie",                         caoCode: "SE" },
  { slug: "atlantic-technological-university", name: "Atlantic Technological University",                           city: "Galway",    websiteUrl: "https://www.atu.ie",                          caoCode: "AU" },
  { slug: "technological-university-of-the-shannon", name: "Technological University of the Shannon",               city: "Limerick",  websiteUrl: "https://www.tus.ie",                          caoCode: "US" },

  // Institutes / Colleges (CAO-participating)
  { slug: "dundalk-institute-of-technology",   name: "Dundalk Institute of Technology",                             city: "Dundalk",   websiteUrl: "https://www.dkit.ie",                         caoCode: "DK" },
  { slug: "iadt-dun-laoghaire",                name: "Dún Laoghaire Institute of Art, Design and Technology (IADT)",city: "Dublin",    websiteUrl: "https://www.iadt.ie",                        caoCode: "DL" },
  { slug: "national-college-of-art-and-design",name: "National College of Art and Design",                          city: "Dublin",    websiteUrl: "https://www.ncad.ie",                         caoCode: "AD" },
  { slug: "national-college-of-ireland",       name: "National College of Ireland (NCI)",                            city: "Dublin",    websiteUrl: "https://www.ncirl.ie",                        caoCode: "NC" },
  { slug: "dublin-city-university",            name: "Dublin City University",                                       city: "Dublin",    websiteUrl: "https://www.dcu.ie",                          caoCode: "DC" },
  { slug: "dublin-business-school",            name: "Dublin Business School",                                       city: "Dublin",    websiteUrl: "https://www.dbs.ie",                          caoCode: "DB" },
  { slug: "dorset-college",                    name: "Dorset College",                                               city: "Dublin",    websiteUrl: "https://www.dorset.ie",                       caoCode: "DS" },
  { slug: "galway-business-school",            name: "Galway Business School",                                       city: "Galway",    websiteUrl: "https://galwaybusinessschool.ie",             caoCode: "GB" },
  { slug: "marino-institute-of-education",     name: "Marino Institute of Education",                                city: "Dublin",    websiteUrl: "https://www.mie.ie",                          caoCode: "CM" },
  { slug: "st-patricks-pontifical-university", name: "St Patrick’s Pontifical University, Maynooth",                 city: "Maynooth",  websiteUrl: "https://www.sppu.ie",                         caoCode: "MU" },
  { slug: "mary-immaculate-college",           name: "Mary Immaculate College",                                      city: "Limerick",  websiteUrl: "https://www.mic.ie",                          caoCode: "MI" },
  { slug: "carlow-college-st-patricks",        name: "Carlow College, St Patrick’s",                                city: "Carlow",    websiteUrl: "https://www.carlowcollege.ie",                 caoCode: "PC" },
  { slug: "griffith-college",                  name: "Griffith College",                                            city: "Dublin",    websiteUrl: "https://www.griffith.ie",                      caoCode: "GC" },
  { slug: "cct-college-dublin",                name: "CCT College Dublin",                                          city: "Dublin",    websiteUrl: "https://www.cct.ie",                           caoCode: "CT" },
  { slug: "american-college-dublin",           name: "American College Dublin",                                     city: "Dublin",    websiteUrl: "https://www.amcd.ie",                          caoCode: "AC" },
  { slug: "setanta-college",                   name: "Setanta College",                                             city: "Thurles",   websiteUrl: "https://www.setantacollege.com",               caoCode: "SC" },
  { slug: "ibat-college-dublin",               name: "IBAT College Dublin",                                         city: "Dublin",    websiteUrl: "https://www.ibat.ie",                          caoCode: "BY" },
  { slug: "shannon-college-of-hotel-management", name: "Shannon College of Hotel Management (University of Galway)", city: "Shannon",   websiteUrl: "https://www.universityofgalway.ie/shannoncollege/", caoCode: "GY" },
];

export const seedCourses: SeedCourse[] = [

  //level6Courses
  // Atlantic Technological University
  { slug: "au170-health-science-physiotherapy", title: "Health Science with Physiotherapy Studies", caoCode: "AU170", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au171-health-science-occupational-therapy", title: "Health Science with Occupational Therapy Studies", caoCode: "AU171", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au172-health-science-dietetics", title: "Health Science with Dietetics Studies", caoCode: "AU172", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au173-dental-nursing", title: "Dental Nursing", caoCode: "AU173", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au174-pharmacy-technician", title: "Pharmacy Technician", caoCode: "AU174", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au190-early-childhood-care-health-education", title: "Early Childhood Care, Health and Education", caoCode: "AU190", degreeType: "Cert", durationYears: 2, subject: "Education", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au401-business", title: "Business", caoCode: "AU401", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au425-heritage", title: "Heritage", caoCode: "AU425", degreeType: "Cert", durationYears: 2, subject: "Arts", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au426-business-tourism", title: "Business in Tourism", caoCode: "AU426", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au429-culinary-arts-professional-chef", title: "Culinary Arts Professional Chef Programme", caoCode: "AU429", degreeType: "Cert", durationYears: 2, subject: "Culinary Arts", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au491-early-childhood-education-care", title: "Early Childhood Education and Care", caoCode: "AU491", degreeType: "Cert", durationYears: 2, subject: "Education", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au725-computing", title: "Computing", caoCode: "AU725", degreeType: "Cert", durationYears: 2, subject: "Computing", awardLevel: 6, institutionSlug: "atlantic-technological-university" },
  { slug: "au730-science", title: "Science", caoCode: "AU730", degreeType: "Cert", durationYears: 2, subject: "Science", awardLevel: 6, institutionSlug: "atlantic-technological-university" },

  // Dublin Business School
  { slug: "db534-sound-engineering-music-production", title: "Sound Engineering and Music Production", caoCode: "DB534", degreeType: "Cert", durationYears: 2, subject: "Arts", awardLevel: 6, institutionSlug: "dublin-business-school" },

  // Griffith College
  { slug: "gc460-music-production-games", title: "Music Production for Games", caoCode: "GC460", degreeType: "Cert", durationYears: 2, subject: "Arts", awardLevel: 6, institutionSlug: "griffith-college" },

  // University of Limerick
  { slug: "lm180-equine-science", title: "Equine Science", caoCode: "LM180", degreeType: "Cert", durationYears: 2, subject: "Science", awardLevel: 6, institutionSlug: "university-of-limerick" },

  // Munster Technological University
  { slug: "mt655-culinary-studies", title: "Culinary Studies", caoCode: "MT655", degreeType: "Cert", durationYears: 2, subject: "Culinary Arts", awardLevel: 6, institutionSlug: "munster-technological-university" },
  { slug: "mt680-biological-environmental-studies", title: "Biological and Environmental Studies", caoCode: "MT680", degreeType: "Cert", durationYears: 2, subject: "Science", awardLevel: 6, institutionSlug: "munster-technological-university" },
  { slug: "mt682-pharmacy-technician", title: "Pharmacy Technician", caoCode: "MT682", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "munster-technological-university" },

  // National College of Ireland
  { slug: "nc102-computing", title: "Computing", caoCode: "NC102", degreeType: "Cert", durationYears: 2, subject: "Computing", awardLevel: 6, institutionSlug: "national-college-of-ireland" },
  { slug: "nc103-business", title: "Business", caoCode: "NC103", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "national-college-of-ireland" },
  { slug: "nc105-data-science", title: "Data Science", caoCode: "NC105", degreeType: "Cert", durationYears: 2, subject: "Computing", awardLevel: 6, institutionSlug: "national-college-of-ireland" },

  // Setanta College
  { slug: "sc601-strength-conditioning", title: "Strength and Conditioning", caoCode: "SC601", degreeType: "Cert", durationYears: 2, subject: "Sports", awardLevel: 6, institutionSlug: "setanta-college" },

  // South East Technological University
  { slug: "se420-business", title: "Business", caoCode: "SE420", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se421-business-law", title: "Business with Law", caoCode: "SE421", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se422-legal-studies", title: "Legal Studies", caoCode: "SE422", degreeType: "Cert", durationYears: 2, subject: "Law", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se423-legal-studies-carlow", title: "Legal Studies", caoCode: "SE423", degreeType: "Cert", durationYears: 2, subject: "Law", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se516-science-applied-biology-chemistry", title: "Science - Applied Biology or Applied Chemistry", caoCode: "SE516", degreeType: "Cert", durationYears: 2, subject: "Science", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se616-computing-applications-programming", title: "Computing - Applications or Programming", caoCode: "SE616", degreeType: "Cert", durationYears: 2, subject: "Computing", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se730-electronic-engineering", title: "Electronic Engineering", caoCode: "SE730", degreeType: "Cert", durationYears: 2, subject: "Engineering", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se731-mechanical-engineering", title: "Mechanical Engineering", caoCode: "SE731", degreeType: "Cert", durationYears: 2, subject: "Engineering", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se936-physiology-health-science", title: "Physiology and Health Science", caoCode: "SE936", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se937-pharmacy-technician-studies", title: "Pharmacy Technician Studies", caoCode: "SE937", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "south-east-technological-university" },
  { slug: "se938-culinary-arts", title: "Culinary Arts", caoCode: "SE938", degreeType: "Cert", durationYears: 2, subject: "Culinary Arts", awardLevel: 6, institutionSlug: "south-east-technological-university" },

  // Technological University Dublin
  { slug: "tu651-applied-biology", title: "Applied Biology", caoCode: "TU651", degreeType: "Cert", durationYears: 2, subject: "Science", awardLevel: 6, institutionSlug: "technological-university-dublin" },
  { slug: "tu652-computing", title: "Computing", caoCode: "TU652", degreeType: "Cert", durationYears: 2, subject: "Computing", awardLevel: 6, institutionSlug: "technological-university-dublin" },
  { slug: "tu654-pharmacy-technician-studies", title: "Pharmacy Technician Studies", caoCode: "TU654", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "technological-university-dublin" },
  { slug: "tu670-business", title: "Business", caoCode: "TU670", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "technological-university-dublin" },
  { slug: "tu673-business-management", title: "Business Management", caoCode: "TU673", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "technological-university-dublin" },
  { slug: "tu674-business-finance", title: "Business and Finance", caoCode: "TU674", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "technological-university-dublin" },
  { slug: "tu675-marketing", title: "Marketing", caoCode: "TU675", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "technological-university-dublin" },

  // Technological University of the Shannon
  { slug: "us610-accounting-finance", title: "Accounting and Finance", caoCode: "US610", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },
  { slug: "us612-business-studies-marketing-management", title: "Business Studies (Marketing and Management)", caoCode: "US612", degreeType: "Cert", durationYears: 2, subject: "Business", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },
  { slug: "us630-culinary-arts-athlone", title: "Culinary Arts", caoCode: "US630", degreeType: "Cert", durationYears: 2, subject: "Culinary Arts", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },
  { slug: "us631-culinary-arts-limerick", title: "Culinary Arts", caoCode: "US631", degreeType: "Cert", durationYears: 2, subject: "Culinary Arts", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },
  { slug: "us640-sports-development-coaching", title: "Sports Development and Coaching", caoCode: "US640", degreeType: "Cert", durationYears: 2, subject: "Sports", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },
  { slug: "us651-agricultural-mechanisation", title: "Agricultural Mechanisation", caoCode: "US651", degreeType: "Cert", durationYears: 2, subject: "Agriculture", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },
  { slug: "us660-pharmacy-technician-athlone", title: "Pharmacy Technician", caoCode: "US660", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },
  { slug: "us661-dental-nursing", title: "Dental Nursing", caoCode: "US661", degreeType: "Cert", durationYears: 2, subject: "Health Sciences", awardLevel: 6, institutionSlug: "technological-university-of-the-shannon" },

  //level7Courses: SeedCourse[] = [
  // Atlantic Technological University
  { slug: "au200-business-common-entry", title: "Business - Common Entry", caoCode: "AU200", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au210-law-criminal-justice", title: "Law with Criminal Justice", caoCode: "AU210", degreeType: "Cert", durationYears: 3, subject: "Law", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au220-culinary-arts", title: "Culinary Arts", caoCode: "AU220", degreeType: "Cert", durationYears: 3, subject: "Culinary Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au221-tourism-hospitality-operations", title: "Tourism and Hospitality Operations", caoCode: "AU221", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au222-sport-exercise", title: "Sport and Exercise", caoCode: "AU222", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au234-design-common-entry", title: "Design - Common Entry", caoCode: "AU234", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au240-quantity-surveying", title: "Quantity Surveying", caoCode: "AU240", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au241-civil-engineering", title: "Civil Engineering", caoCode: "AU241", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au242-construction-common-entry", title: "Construction - Common Entry", caoCode: "AU242", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au243-building-engineering-common-entry", title: "Building Engineering - Common Entry", caoCode: "AU243", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au251-mechanical-engineering", title: "Mechanical Engineering", caoCode: "AU251", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au260-computer-games-development", title: "Computer Games Development", caoCode: "AU260", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au261-computing", title: "Computing", caoCode: "AU261", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au262-cybersecurity-digital-forensics", title: "Cybersecurity and Digital Forensics", caoCode: "AU262", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au270-science-common-entry", title: "Science - Common Entry", caoCode: "AU270", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au271-veterinary-nursing", title: "Veterinary Nursing", caoCode: "AU271", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au272-agriculture", title: "Agriculture", caoCode: "AU272", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au290-inclusive-practice-special-needs", title: "Inclusive Practice for Special Needs Assistance", caoCode: "AU290", degreeType: "Cert", durationYears: 3, subject: "Education", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au501-business-galway", title: "Business", caoCode: "AU501", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au502-business-information-systems", title: "Business Information Systems", caoCode: "AU502", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au503-marketing-sales", title: "Marketing and Sales", caoCode: "AU503", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au506-agri-business-management", title: "Agri-Business Management", caoCode: "AU506", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au518-art", title: "Art", caoCode: "AU518", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au519-design-common-entry-galway", title: "Design - Common Entry", caoCode: "AU519", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au531-gastronomy-science-food-innovation", title: "Gastronomy Science and Food Innovation", caoCode: "AU531", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au532-tourism-hospitality-event-management", title: "Tourism, Hospitality & Event Management - Common Entry", caoCode: "AU532", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au535-construction-management", title: "Construction Management", caoCode: "AU535", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au536-quantity-surveying-construction-economics", title: "Quantity Surveying and Construction Economics", caoCode: "AU536", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au537-architectural-technology", title: "Architectural Technology", caoCode: "AU537", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au538-civil-engineering-galway", title: "Civil Engineering", caoCode: "AU538", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au542-software-electronic-engineering", title: "Software and Electronic Engineering", caoCode: "AU542", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au545-mechanical-engineering-galway", title: "Mechanical Engineering", caoCode: "AU545", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au547-biomedical-engineering", title: "Biomedical Engineering", caoCode: "AU547", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au549-engineering-common-entry", title: "Engineering - Common Entry", caoCode: "AU549", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au555-applied-freshwater-marine-biology", title: "Applied Freshwater and Marine Biology", caoCode: "AU555", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au556-science-common-entry-galway", title: "Science - Common Entry", caoCode: "AU556", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au557-agriculture-environmental-management", title: "Agriculture and Environmental Management", caoCode: "AU557", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au569-applied-biology-biopharmaceutical", title: "Applied Biology and Biopharmaceutical Science", caoCode: "AU569", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au575-physics-instrumentation", title: "Physics and Instrumentation", caoCode: "AU575", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au576-computing-software-development", title: "Computing in Software Development", caoCode: "AU576", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au577-computing-digital-media", title: "Computing and Digital Media", caoCode: "AU577", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au583-furniture-design-making-technology", title: "Furniture Design, Making and Technology - Common Entry", caoCode: "AU583", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au590-outdoor-education", title: "Outdoor Education", caoCode: "AU590", degreeType: "Cert", durationYears: 3, subject: "Education", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au593-applied-social-care", title: "Applied Social Care", caoCode: "AU593", degreeType: "Cert", durationYears: 3, subject: "Social Care", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au800-business-sligo", title: "Business", caoCode: "AU800", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au802-marketing", title: "Marketing", caoCode: "AU802", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au803-international-tourism-event-management", title: "International Tourism and Event Management", caoCode: "AU803", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au804-applied-sport-business", title: "Applied Sport with Business", caoCode: "AU804", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au820-interior-architecture-design", title: "Interior Architecture and Design", caoCode: "AU820", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au821-creative-design", title: "Creative Design", caoCode: "AU821", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au822-fine-art", title: "Fine Art", caoCode: "AU822", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au823-performing-arts", title: "Performing Arts", caoCode: "AU823", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au830-engineering-common-entry-sligo", title: "Engineering - Common Entry", caoCode: "AU830", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au831-mechatronic-engineering", title: "Mechatronic Engineering", caoCode: "AU831", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au833-mechanical-engineering-sligo", title: "Mechanical Engineering", caoCode: "AU833", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au835-civil-engineering-sligo", title: "Civil Engineering", caoCode: "AU835", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au836-quantity-surveying-sligo", title: "Quantity Surveying", caoCode: "AU836", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au837-advanced-wood-sustainable-building", title: "Advanced Wood and Sustainable Building Technology", caoCode: "AU837", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au845-computing-common-entry", title: "Computing - Common Entry", caoCode: "AU845", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au848-games-development", title: "Games Development", caoCode: "AU848", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au855-environmental-science-ecology", title: "Environmental Science with Ecology", caoCode: "AU855", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au856-occupational-safety-health", title: "Occupational Safety and Health", caoCode: "AU856", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au857-pharmaceutical-science-drug-development", title: "Pharmaceutical Science with Drug Development", caoCode: "AU857", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au858-biomedical-science", title: "Biomedical Science", caoCode: "AU858", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au859-forensic-investigation-analysis", title: "Forensic Investigation and Analysis", caoCode: "AU859", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au861-health-science-physiology", title: "Health Science and Physiology", caoCode: "AU861", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "atlantic-technological-university" },
  { slug: "au862-human-nutrition", title: "Human Nutrition", caoCode: "AU862", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "atlantic-technological-university" },

  // IBAT College Dublin
  { slug: "by002-business", title: "Business", caoCode: "BY002", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "ibat-college-dublin" },

  // Dublin Business School
  { slug: "db571-business-studies", title: "Business Studies", caoCode: "DB571", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dublin-business-school" },
  { slug: "db572-business-accounting", title: "Business in Accounting", caoCode: "DB572", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dublin-business-school" },
  { slug: "db573-business-marketing", title: "Business in Marketing", caoCode: "DB573", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dublin-business-school" },
  { slug: "db576-film-creative-media", title: "Film and Creative Media", caoCode: "DB576", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "dublin-business-school" },

  // Dundalk Institute of Technology
  { slug: "dk710-business-management", title: "Business and Management", caoCode: "DK710", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk711-business-technology", title: "Business and Technology", caoCode: "DK711", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk712-digital-marketing-public-relations", title: "Digital Marketing and Public Relations", caoCode: "DK712", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk721-computing", title: "Computing", caoCode: "DK721", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk723-computing-systems-operations", title: "Computing Systems and Operations", caoCode: "DK723", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk730-building-surveying", title: "Building Surveying", caoCode: "DK730", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk731-architectural-technology", title: "Architectural Technology", caoCode: "DK731", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk732-construction-management", title: "Construction Management", caoCode: "DK732", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk734-quantity-surveying", title: "Quantity Surveying", caoCode: "DK734", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk740-engineering-electrical-electronic", title: "Engineering - Electrical and Electronic Systems", caoCode: "DK740", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk742-engineering-mechanical", title: "Engineering - Mechanical Engineering", caoCode: "DK742", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk744-engineering-civil", title: "Engineering - Civil Engineering", caoCode: "DK744", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk750-hospitality-management", title: "Hospitality Management", caoCode: "DK750", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk752-event-management", title: "Event Management", caoCode: "DK752", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk753-culinary-arts", title: "Culinary Arts", caoCode: "DK753", degreeType: "Cert", durationYears: 3, subject: "Culinary Arts", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk763-sport-exercise-enterprise", title: "Sport, Exercise and Enterprise", caoCode: "DK763", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk767-community-youth-work", title: "Community Youth Work", caoCode: "DK767", degreeType: "Cert", durationYears: 3, subject: "Social Care", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk768-audio-music-production", title: "Audio and Music Production", caoCode: "DK768", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk769-creative-media", title: "Creative Media", caoCode: "DK769", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk770-theatre-film-practice", title: "Theatre and Film Practice", caoCode: "DK770", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk771-musical-theatre", title: "Musical Theatre", caoCode: "DK771", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk781-science-bioscience", title: "Science - Bioscience", caoCode: "DK781", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk783-science-pharmaceutical", title: "Science - Pharmaceutical Science", caoCode: "DK783", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk784-veterinary-nursing", title: "Veterinary Nursing", caoCode: "DK784", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk791-audio-development", title: "Audio Development", caoCode: "DK791", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk792-music-performance-technologies", title: "Music and Performance Technologies", caoCode: "DK792", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },
  { slug: "dk793-sound-design", title: "Sound Design", caoCode: "DK793", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "dundalk-institute-of-technology" },

  // Additional institutions and courses would continue here...
  // (Due to length limits, I'll continue with the key institutions)

  // Trinity College Dublin
  { slug: "tr801-dental-nursing", title: "Dental Nursing", caoCode: "TR801", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "trinity-college-dublin" },
  { slug: "tr802-dental-hygiene", title: "Dental Hygiene", caoCode: "TR802", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "trinity-college-dublin" },
  { slug: "tr803-dental-technology", title: "Dental Technology", caoCode: "TR803", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "trinity-college-dublin" },

  // Dorset College
  { slug: "ds701-business", title: "Business", caoCode: "DS701", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "dorset-college" },
  { slug: "ds702-computing", title: "Computing", caoCode: "DS702", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "dorset-college" },

  // Galway Business School
  { slug: "gb001-business", title: "Business", caoCode: "GB001", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "galway-business-school" },

  // Griffith College
  { slug: "gc335-computing-limerick", title: "Computing", caoCode: "GC335", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "griffith-college" },
  { slug: "gc435-computing-dublin", title: "Computing", caoCode: "GC435", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "griffith-college" },
  { slug: "gc465-communications", title: "Communications", caoCode: "GC465", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "griffith-college" },
  { slug: "gc466-film-tv-screen-media", title: "Film, TV and Screen Media Production", caoCode: "GC466", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "griffith-college" },
  { slug: "gc480-graphic-communication-design", title: "Graphic Communication Design", caoCode: "GC480", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "griffith-college" },
  { slug: "gc490-interior-architecture-design", title: "Interior Architecture & Design", caoCode: "GC490", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "griffith-college" },
  { slug: "gc495-fashion-design", title: "Fashion Design", caoCode: "GC495", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "griffith-college" },

  // Munster Technological University
  { slug: "mt510-recreation-leisure-management", title: "Recreation and Leisure Management", caoCode: "MT510", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt511-health-sport-exercise-sciences", title: "Health, Sport and Exercise Sciences", caoCode: "MT511", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt512-health-exercise-massage-therapy", title: "Health and Exercise Sciences with Massage Therapy", caoCode: "MT512", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt513-coaching-sports-performance", title: "Coaching and Sports Performance", caoCode: "MT513", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt541-business-common-entry-kerry", title: "Business (Common Entry)", caoCode: "MT541", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt550-business-common-entry-cork", title: "Business (Common Entry)", caoCode: "MT550", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt552-tourism-management", title: "Tourism Management", caoCode: "MT552", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt554-hospitality-management", title: "Hospitality Management", caoCode: "MT554", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt571-early-childhood-education-care-kerry", title: "Early Childhood Education and Care", caoCode: "MT571", degreeType: "Cert", durationYears: 3, subject: "Education", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt573-social-care-work-cork", title: "Social Care Work", caoCode: "MT573", degreeType: "Cert", durationYears: 3, subject: "Social Care", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt574-social-care-kerry", title: "Social Care", caoCode: "MT574", degreeType: "Cert", durationYears: 3, subject: "Social Care", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt700-software-development", title: "Software Development", caoCode: "MT700", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt703-computing-common-entry", title: "Computing (Common Entry)", caoCode: "MT703", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt705-information-technology-cybersecurity", title: "Information Technology and Cybersecurity", caoCode: "MT705", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt706-computer-systems-networking", title: "Computer Systems and Networking", caoCode: "MT706", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt711-animation-visual-effects", title: "Animation, Visual Effects and Motion Design", caoCode: "MT711", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt731-civil-engineering-cork", title: "Civil Engineering", caoCode: "MT731", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt732-civil-engineering-kerry", title: "Civil Engineering", caoCode: "MT732", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt736-mechanical-engineering-cork", title: "Mechanical Engineering", caoCode: "MT736", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt739-biomedical-engineering-cork", title: "Biomedical Engineering", caoCode: "MT739", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt745-electrical-engineering", title: "Electrical Engineering", caoCode: "MT745", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt746-electronic-engineering", title: "Electronic Engineering", caoCode: "MT746", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt747-automotive-technology-management", title: "Automotive Technology and Management", caoCode: "MT747", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt748-agricultural-engineering", title: "Agricultural Engineering", caoCode: "MT748", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt750-agriculture", title: "Agriculture", caoCode: "MT750", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt758-construction-common-entry", title: "Construction (Common Entry)", caoCode: "MT758", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt759-architectural-technology", title: "Architectural Technology", caoCode: "MT759", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt760-interior-architecture", title: "Interior Architecture", caoCode: "MT760", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt761-environmental-engineering", title: "Environmental Engineering", caoCode: "MT761", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt764-marine-engineering", title: "Marine Engineering", caoCode: "MT764", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt765-marine-electrotechnology", title: "Marine Electrotechnology", caoCode: "MT765", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt766-nautical-science", title: "Nautical Science", caoCode: "MT766", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt770-physical-sciences-common-entry", title: "Physical Sciences (Common Entry)", caoCode: "MT770", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt772-pharmaceutical-science-biopharmaceutics", title: "Pharmaceutical Science (Degree Award option - Biopharmaceutics)", caoCode: "MT772", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt774-analytical-pharmaceutical-chemistry", title: "Analytical and Pharmaceutical Chemistry", caoCode: "MT774", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt775-applied-biosciences", title: "Applied Biosciences", caoCode: "MT775", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt777-agricultural-science", title: "Agricultural Science", caoCode: "MT777", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt781-animal-bioscience", title: "Animal Bioscience", caoCode: "MT781", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt782-applied-physics-instrumentation", title: "Applied Physics and Instrumentation", caoCode: "MT782", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "munster-technological-university" },
  { slug: "mt784-veterinary-nursing-kerry", title: "Veterinary Nursing", caoCode: "MT784", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "munster-technological-university" },

  // Carlow College, St. Patrick's
  { slug: "pc404-applied-social-studies", title: "Applied Social Studies - Professional Social Care", caoCode: "PC404", degreeType: "Cert", durationYears: 3, subject: "Social Care", awardLevel: 7, institutionSlug: "carlow-college-st-patricks" },

  // Setanta College
  { slug: "sc701-strength-conditioning", title: "Strength and Conditioning", caoCode: "SC701", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "setanta-college" },

  // South East Technological University
  { slug: "se209-design", title: "Design", caoCode: "SE209", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se210-visual-communications-design", title: "Visual Communications and Design", caoCode: "SE210", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se211-art", title: "Art", caoCode: "SE211", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se212-tv-media-production", title: "TV and Media Production", caoCode: "SE212", degreeType: "Cert", durationYears: 3, subject: "Arts", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se301-content-creation-social-media", title: "Content Creation and Social Media", caoCode: "SE301", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se414-business-carlow", title: "Business", caoCode: "SE414", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se415-business-waterford", title: "Business", caoCode: "SE415", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se416-business-wexford", title: "Business", caoCode: "SE416", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se417-public-relations-media", title: "Public Relations and Media", caoCode: "SE417", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se418-digital-marketing-analytics", title: "Digital Marketing with Analytics", caoCode: "SE418", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se419-fashion-buying-retail-management", title: "Fashion Buying and Retail Management", caoCode: "SE419", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se505-forestry", title: "Forestry", caoCode: "SE505", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se506-horticulture-kildalton", title: "Horticulture", caoCode: "SE506", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se507-horticulture-dublin", title: "Horticulture", caoCode: "SE507", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se508-agriculture", title: "Agriculture", caoCode: "SE508", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se509-sustainable-farm-management-agribusiness", title: "Sustainable Farm Management and Agribusiness", caoCode: "SE509", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se510-food-science", title: "Food Science", caoCode: "SE510", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se511-pharmaceutical-science", title: "Pharmaceutical Science", caoCode: "SE511", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se512-science", title: "Science", caoCode: "SE512", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se513-analytical-science", title: "Analytical Science", caoCode: "SE513", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se514-molecular-biology-biopharmaceutical", title: "Molecular Biology with Biopharmaceutical Science", caoCode: "SE514", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se515-biosciences", title: "Biosciences", caoCode: "SE515", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se520-applied-microbiology", title: "Applied Microbiology", caoCode: "SE520", degreeType: "Cert", durationYears: 3, subject: "Science", awardLevel: 7, institutionSlug: "south-east-technological-university" },

  // Computing courses for SE
  { slug: "se609-software-development", title: "Software Development", caoCode: "SE609", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se610-software-systems-development", title: "Software Systems Development", caoCode: "SE610", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se611-creative-computing", title: "Creative Computing", caoCode: "SE611", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se612-cyber-crime-it-security", title: "Cyber Crime and IT Security", caoCode: "SE612", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se613-information-technology", title: "Information Technology", caoCode: "SE613", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se614-information-technology-management", title: "Information Technology Management", caoCode: "SE614", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se615-computing-interactive-digital-art", title: "Computing in Interactive Digital Art and Design", caoCode: "SE615", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se618-computer-games-programming", title: "Computer Games Programming", caoCode: "SE618", degreeType: "Cert", durationYears: 3, subject: "Computing", awardLevel: 7, institutionSlug: "south-east-technological-university" },

  // Engineering courses for SE
  { slug: "se716-architectural-technology-granary", title: "Architectural Technology", caoCode: "SE716", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se717-architectural-technology-carlow", title: "Architectural Technology", caoCode: "SE717", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se719-civil-engineering", title: "Civil Engineering", caoCode: "SE719", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se720-electrical-engineering-waterford", title: "Electrical Engineering", caoCode: "SE720", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se721-electronic-engineering-waterford", title: "Electronic Engineering", caoCode: "SE721", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se722-electronic-engineering-carlow", title: "Electronic Engineering", caoCode: "SE722", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se723-mechanical-engineering-waterford", title: "Mechanical Engineering", caoCode: "SE723", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se724-mechanical-engineering-carlow", title: "Mechanical Engineering", caoCode: "SE724", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se725-manufacturing-engineering", title: "Manufacturing Engineering", caoCode: "SE725", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se726-construction-management", title: "Construction Management", caoCode: "SE726", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se727-biomedical-electronics", title: "Biomedical Electronics", caoCode: "SE727", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se728-robotics-automated-systems", title: "Robotics and Automated Systems", caoCode: "SE728", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se729-aircraft-systems", title: "Aircraft Systems", caoCode: "SE729", degreeType: "Cert", durationYears: 3, subject: "Engineering", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se733-agricultural-systems-engineering", title: "Agricultural Systems Engineering", caoCode: "SE733", degreeType: "Cert", durationYears: 3, subject: "Agriculture", awardLevel: 7, institutionSlug: "south-east-technological-university" },

  // Health and Social Care courses for SE
  { slug: "se924-tourism-hospitality-services", title: "Tourism and Hospitality Services", caoCode: "SE924", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se925-tourism-event-management", title: "Tourism and Event Management", caoCode: "SE925", degreeType: "Cert", durationYears: 3, subject: "Business", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se926-professional-social-care-practice", title: "Professional Social Care Practice", caoCode: "SE926", degreeType: "Cert", durationYears: 3, subject: "Social Care", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se927-applied-social-care", title: "Applied Social Care", caoCode: "SE927", degreeType: "Cert", durationYears: 3, subject: "Social Care", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se928-applied-health-care", title: "Applied Health Care", caoCode: "SE928", degreeType: "Cert", durationYears: 3, subject: "Health Sciences", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se929-sport-coaching-business-gaelic", title: "Sport Coaching and Business Management (Gaelic Games)", caoCode: "SE929", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se930-sport-coaching-business-rugby", title: "Sport Coaching and Business Management (Rugby)", caoCode: "SE930", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se931-sport-coaching-business-football", title: "Sport Coaching and Business Management (Football)", caoCode: "SE931", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se932-sport-business-coaching", title: "Sport, Business and Coaching", caoCode: "SE932", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se933-recreation-sport-management", title: "Recreation and Sport Management", caoCode: "SE933", degreeType: "Cert", durationYears: 3, subject: "Sports", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se934-early-childhood-education-practice-wexford", title: "Early Childhood Education and Practice", caoCode: "SE934", degreeType: "Cert", durationYears: 3, subject: "Education", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  { slug: "se935-early-childhood-education-practice-carlow", title: "Early Childhood Education and Practice", caoCode: "SE935", degreeType: "Cert", durationYears: 3, subject: "Education", awardLevel: 7, institutionSlug: "south-east-technological-university" },
  ];