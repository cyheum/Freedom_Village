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

const STDDescription = styled.div<IDescriptionSize>`
  ${mixin.flexSet("flex-start")}

  ${({ textWidth, textHeight }) =>
    css`
      width: ${textWidth * 0.4}px;
      height: ${textHeight * 0.4}px;
      font-size: ${20 * 0.4}px;
      padding: ${15 * 0.4}px;

      @media ${device.laptopL} {
        width: ${textWidth * 0.6}px;
        height: ${textHeight * 0.6}px;
        font-size: ${20 * 0.6}px;
        padding: ${15 * 0.6}px;
      }

      @media ${device.desktopL} {
        width: ${textWidth}px;
        height: ${textHeight}px;
        font-size: 20px;
        padding: 15px;
      }
    `}
`;

const STDIcon = styled.img`
  width: ${85 * 0.4}px;
  height: ${85 * 0.4}px;

  @media ${device.laptopL} {
    width: ${85 * 0.6}px;
    height: ${85 * 0.6}px;
  }

  @media ${device.desktopL} {
    width: 85px;
    height: 85px;
  }
`;
