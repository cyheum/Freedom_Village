import { css } from "styled-components";
import { device } from "styles/theme";

const ratio = {
  tablet: 0.4,
  laptop: 0.6,
};

const mixin = {
  flexSet: (
    justifyContent = "center",
    alignItems = "center",
    flexDirection = "row"
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
  getPosition: (type: string, X: number, Y: number) => {
    switch (type) {
      case "LEFT_TOP_LIST":
        return `top: ${Y}px; left: ${X}px;`;
      case "LEFT_BOTTOM_LIST":
        return `bottom: ${Y}px; left: ${X}px;`;
      case "RIGHT_LIST":
        return `top: ${Y}px; right: ${X}px; `;
    }
  },
  dynamicScreen: (width = 0, height = 0, padding = [0, 0, 0, 0]) => css`
    width: ${width * ratio.tablet}px;
    height: ${height * ratio.tablet}px;
    padding: ${padding[0] * ratio.tablet}px ${padding[1] * ratio.tablet}px
      ${padding[2] * ratio.tablet}px ${padding[3] * ratio.tablet}px;

    @media ${device.laptopL} {
      width: ${width * ratio.laptop}px;
      height: ${height * ratio.laptop}px;
      padding: ${padding[0] * ratio.laptop}px ${padding[1] * ratio.laptop}px
        ${padding[2] * ratio.laptop}px ${padding[3] * ratio.laptop}px;
    }

    @media ${device.desktopL} {
      width: ${width}px;
      height: ${height}px;
      padding: ${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
    }
  `,
};
export default mixin;
