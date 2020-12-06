import React from "react";
import styled, { css } from "styled-components";
import { device } from "styles/theme";
import mixin from "styles/mixin";

interface IDescriptionSize {
  textWidth: number;
  textHeight: number;
}

interface IProp extends IDescriptionSize {
  iconSrc: string;
  description: string;
}

const StoreDetailDescription: React.FC<IProp> = ({
  iconSrc,
  description,
  textWidth,
  textHeight,
}) => {
  return (
    <>
      <STDIcon alt="storeIcon" src={iconSrc} />
      <STDDescription textWidth={textWidth} textHeight={textHeight}>
        {description}
      </STDDescription>
    </>
  );
};

export default StoreDetailDescription;

const FIXED_SIZE = { icon: { width: 85 * 0.8, height: 85 * 0.8 } };

const STDDescription = styled.div<IDescriptionSize>`
  ${mixin.flexSet("flex-start")}

  ${({ textWidth, textHeight }) =>
    css`
      width: ${textWidth * 0.4}px;
      height: ${textHeight * 0.4}px;
      font-size: ${20 * 0.4 * 0.8}px;
      -webkit-transform: scale(0.63);

      @media ${device.laptopL} {
        width: ${textWidth * 0.6}px;
        height: ${textHeight * 0.6}px;
        font-size: ${20 * 0.6 * 0.8}px;
        -webkit-transform: scale(0.83);
      }

      @media ${device.desktopL} {
        width: ${textWidth}px;
        height: ${textHeight}px;
        font-size: ${20 * 0.8}px;
        padding: ${15 * 0.8}px;
      }
    `}
`;

const STDIcon = styled.img`
  width: ${FIXED_SIZE.icon.width * 0.4}px;
  height: ${FIXED_SIZE.icon.height * 0.4}px;

  @media ${device.laptopL} {
    width: ${FIXED_SIZE.icon.width * 0.6}px;
    height: ${FIXED_SIZE.icon.height * 0.6}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_SIZE.icon.width}px;
    height: ${FIXED_SIZE.icon.height}px;
  }
`;
