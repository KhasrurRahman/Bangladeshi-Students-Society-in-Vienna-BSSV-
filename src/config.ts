export const SITE = {
  website: "https://bangladeshi-students-society-in-vienna.vercel.app", // replace this with your deployed domain
  author: "MD Khasrur Rahman",
  profile: "https://khasrurrahman.github.io/portfolio/",
  desc: "Bangladeshi Students Society in Vienna (BSSV) 🇧🇩 🇦🇹",
  title: "(BSSV) 🇧🇩 🇦🇹",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 7,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/KhasrurRahman/Bangladeshi-Students-Society-in-Vienna-BSSV-",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
