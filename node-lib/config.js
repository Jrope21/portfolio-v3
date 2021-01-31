
// const BASE_URL = `https://direpairsadmin.wpcomstaging.com`

// const ENDPOINTS = {
//   NAVIGATION: `${BASE_URL}/wp-json/menus/v1/menus/main-menu`,
//   PAGES: `${BASE_URL}/wp-json/wp/v2/pages`,
//   ALL_SERVICES: `${BASE_URL}/wp-json/wp/v2/services`,
// }

const TEMPLATES = {
  HOME_PAGE: require.resolve(
    `../src/templates/home.template.jsx`
  ),
  ARCHIVE: require.resolve(
    `../src/templates/archive.template.jsx`
  ),
  PROJECT_DETAIL: require.resolve(
    `../src/templates/project-detail.template.jsx`
  ),
}

module.exports = {
//   BASE_URL,
//   ENDPOINTS,
  TEMPLATES,
}
