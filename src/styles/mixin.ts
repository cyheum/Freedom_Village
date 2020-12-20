import { css } from 'styled-components';
import { device } from 'styles/theme';

const RATIO = {
  tablet: 0.5,
  laptop: 0.7,
};

const mixin = {
  flexSet: (
    justifyContent = 'center',
    alignItems = 'center',
    flexDirection = 'row'
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
  getPosition: (type: string, X: number, Y: number) => {
    switch (type) {
      case 'LEFT_TOP_LIST':
        return `top: ${Y}px; left: ${X}px;`;
      case 'LEFT_BOTTOM_LIST':
        return `bottom: ${Y}px; left: ${X}px;`;
      case 'RIGHT_LIST':
        return `top: ${Y}px; right: ${X}px; `;
    }
  },
  dynamicScreen: (width = 0, height = 0, padding = [0, 0, 0, 0]) => css`
    width: ${width * RATIO.tablet}px;
    height: ${height * RATIO.tablet}px;
    padding: ${padding[0] * RATIO.tablet}px ${padding[1] * RATIO.tablet}px
      ${padding[2] * RATIO.tablet}px ${padding[3] * RATIO.tablet}px;

    @media ${device.laptopL} {
      width: ${width * RATIO.laptop}px;
      height: ${height * RATIO.laptop}px;
      padding: ${padding[0] * RATIO.laptop}px ${padding[1] * RATIO.laptop}px
        ${padding[2] * RATIO.laptop}px ${padding[3] * RATIO.laptop}px;
    }

    @media ${device.desktopL} {
      width: ${width}px;
      height: ${height}px;
      padding: ${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
    }
  `,
};
export default mixin;
