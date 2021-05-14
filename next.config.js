const { i18n } = require("./next-i18next.config");

// module.exports = {
//   i18n,
// };

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid'
]);

module.exports = withTM({
  i18n,
});