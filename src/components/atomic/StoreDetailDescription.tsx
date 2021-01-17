import React from 'react';
import styled, { css } from 'styled-components';
import { device } from 'styles/theme';
import mixin from 'styles/mixin';

interface IDescriptionSize {
  textWidth: number;
  textHeight: number;
}

interface IProp extends IDescriptionSize {
  link: string;
  iconSrc: string;
  description: string;
}

const StoreDetailDescription: React.FC<IProp> = ({
  link,
  iconSrc,
  description,
  textWidth,
  textHeight,
}) => {
  return (
    <STDContainer href={link}>
      <STDIcon alt="storeIcon" src={iconSrc} />
      <STDDescription textWidth={textWidth} textHeight={textHeight}>
        {description}
      </STDDescription>
    </STDContainer>
  );
};

export default StoreDetailDescription;

const FIXED_SIZE = { icon: { width: 85 * 0.8, height: 85 * 0.8 } };
const RATIO = { tablet: 0.5, laptop: 0.7 };

const STDContainer = styled.a`
  ${mixin.flexSet('flexStart')}
`;

const STDDescription = styled.div<IDescriptionSize>`
  ${mixin.flexSet('flex-start')}

  ${({ textWidth, textHeight }) =>
    css`
      width: ${textWidth * RATIO.tablet}px;
      height: ${textHeight * RATIO.tablet}px;
      font-size: ${20 * RATIO.tablet * 0.8}px;
      -webkit-transform: scale(0.63);

      @media ${device.laptopL} {
        width: ${textWidth * RATIO.laptop}px;
        height: ${textHeight * RATIO.laptop}px;
        font-size: ${20 * RATIO.laptop * 0.8}px;
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
  width: ${FIXED_SIZE.icon.width * RATIO.tablet}px;
  height: ${FIXED_SIZE.icon.height * RATIO.tablet}px;

  @media ${device.laptopL} {
    width: ${FIXED_SIZE.icon.width * RATIO.laptop}px;
    height: ${FIXED_SIZE.icon.height * RATIO.laptop}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_SIZE.icon.width}px;
    height: ${FIXED_SIZE.icon.height}px;
  }
`;
