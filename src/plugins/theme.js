let date = new Date();
let primaryColor = "#fa4694";
if (date.getDate() == 1 && date.getMonth() == 3) {
  primaryColor = "#fa4694";
} else if (date.getDate() == 1 && date.getMonth() == 9) {
  primaryColor = "#fa4694";
} else if (
  date.getDate() == 4 &&
  date.getMonth() == 3 &&
  date.getFullYear() == 2021
) {
  primaryColor = "#888";
}
export default {
  themes: {
    light: {
      primary: primaryColor,
      secondary: "#fa82b6",
      tertiary: "#495057",
      accent: "#fa4694",
      error: "#f55a4e",
      info: "#00d3ee",
      success: "#5cb860",
      warning: "#ffa21a"
    },
    options: {
      customProperties: true
    }
  }
};
