export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
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
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
