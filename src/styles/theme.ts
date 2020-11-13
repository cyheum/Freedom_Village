const theme = {
  pinkColor: "#ff385c",
  fontColorBlack: "#222222",
  fontColorGray: "#717171",
  backgroundColorWhite: "#ffffff",
  backgroundColorGray: "#f7f7f7",
  borderSet: "1px solid #dddddd",
  fontLight: 300,
  fontRegular: 400,
  fontMedium: 500,
  fontBold: 700,
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1200px",
  desktop: "1440px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

export default theme;
