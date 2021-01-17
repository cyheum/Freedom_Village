import { ILinks } from 'modules';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { device } from 'styles/theme';
import StoreDetailDescription from '../atomic/StoreDetailDescription';

interface IBlur {
  emptyBlur: string;
  isRightFadeoutOn: boolean;
}

interface IData {
  iconSrc: string;
  description: string;
  textWidth: number;
  textHeight: number;
}

interface IProp {
  links: ILinks;
  rightTopImgSrc: string;
  rightBottomImgSrc: string;
  topEmptyBlur: string;
  bottomEmptyBlur: string;
  rightTopData: IData[];
  rightBottomData: IData[];
  isRightClicked: boolean;
  isRightFadeoutOn: boolean;
  onClickSetFadeout: () => void;
}

const RightDetailContainer: React.FC<IProp> = ({
  links,
  rightTopImgSrc,
  rightBottomImgSrc,
  topEmptyBlur,
  bottomEmptyBlur,
  rightTopData,
  rightBottomData,
  isRightClicked,
  isRightFadeoutOn,
  onClickSetFadeout,
}) => {
  return (
    <STDContainer>
      <STDTopContainer onClick={() => onClickSetFadeout()}>
        {!isRightClicked && (
          <STDTopBlurBox
            emptyBlur={topEmptyBlur}
            isRightFadeoutOn={isRightFadeoutOn}
          />
        )}
        <STDTopImgContainer alt="storeImg2" src={rightTopImgSrc} />
      </STDTopContainer>
      <STDIconsContainer>
        {rightTopData.map(
          ({ iconSrc, description, textWidth, textHeight }, idx) => {
            return (
              <StoreDetailDescription
                key={idx}
                link={links.top[idx]}
                iconSrc={iconSrc}
                description={description}
                textWidth={textWidth}
                textHeight={textHeight}
              />
            );
          }
        )}
      </STDIconsContainer>
      <STDBottomContainer onClick={() => onClickSetFadeout()}>
        {!isRightClicked && (
          <STDBottomBlurBox
            emptyBlur={bottomEmptyBlur}
            isRightFadeoutOn={isRightFadeoutOn}
          />
        )}
        <STDBottomImgContainer alt="storeImg2" src={rightBottomImgSrc} />
      </STDBottomContainer>
      <STDIconsContainer>
        {rightBottomData.map(
          ({ iconSrc, description, textWidth, textHeight }, idx) => {
            return (
              <StoreDetailDescription
                key={idx}
                link={links.bottom[idx]}
                iconSrc={iconSrc}
                description={description}
                textWidth={textWidth}
                textHeight={textHeight}
              />
            );
          }
        )}
      </STDIconsContainer>
    </STDContainer>
  );
};

export default RightDetailContainer;

const FIXED_VAL = {
  container: { width: 720 * 0.8, height: 1080 * 0.8, padding: 25 * 0.8 },
  topContainer: { width: 670 * 0.8, height: 440 * 0.8 },
  bottomContainer: { width: 670 * 0.8, height: 325 * 0.8 },
  iconContainer: { margin: 30 * 0.8 },
};

const RATIO = { tablet: 0.5, laptop: 0.7 };

const fadeout = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const STDContainer = styled.div`
  padding: ${FIXED_VAL.container.padding * RATIO.tablet}px;
  padding-bottom: 0;
  width: ${FIXED_VAL.container.width * RATIO.tablet}px;
  height: ${FIXED_VAL.container.height * RATIO.tablet}px;

  @media ${device.laptopL} {
    padding: ${FIXED_VAL.container.padding * RATIO.laptop}px;
    padding-bottom: 0;
    width: ${FIXED_VAL.container.width * RATIO.laptop}px;
    height: ${FIXED_VAL.container.height * RATIO.laptop}px;
  }

  @media ${device.desktopL} {
    padding: ${FIXED_VAL.container.padding * 0.8}px;
    padding-bottom: 0;
    width: ${FIXED_VAL.container.width}px;
    height: ${FIXED_VAL.container.height}px;
  }
`;

const STDTopContainer = styled.div`
  position: relative;
  width: ${FIXED_VAL.topContainer.width * RATIO.tablet}px;
  height: ${FIXED_VAL.topContainer.height * RATIO.tablet}px;

  @media ${device.laptopL} {
    width: ${FIXED_VAL.topContainer.width * RATIO.laptop}px;
    height: ${FIXED_VAL.topContainer.height * RATIO.laptop}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_VAL.topContainer.width}px;
    height: ${FIXED_VAL.topContainer.height}px;
  }
`;

const STDBottomContainer = styled.div`
  position: relative;
  width: ${FIXED_VAL.bottomContainer.width * RATIO.tablet}px;
  height: ${FIXED_VAL.bottomContainer.height * RATIO.tablet}px;

  @media ${device.laptopL} {
    width: ${FIXED_VAL.bottomContainer.width * RATIO.laptop}px;
    height: ${FIXED_VAL.bottomContainer.height * RATIO.laptop}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_VAL.bottomContainer.width}px;
    height: ${FIXED_VAL.bottomContainer.height}px;
  }
`;

const STDTopBlurBox = styled.img<IBlur>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ emptyBlur }) => css`
    background: url(${emptyBlur});
    background-size: cover;
  `}
  ${({ isRightFadeoutOn }) =>
    isRightFadeoutOn &&
    css`
      animation: ${fadeout} 1200ms linear normal forwards;
    `}
`;

const STDTopImgContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const STDBottomBlurBox = styled.div<IBlur>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ emptyBlur }) => css`
    background: url(${emptyBlur});
    background-size: cover;
  `}
  ${({ isRightFadeoutOn }) =>
    isRightFadeoutOn &&
    css`
      animation: ${fadeout} 1200ms linear normal forwards;
    `}
`;

const STDBottomImgContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const STDIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${FIXED_VAL.iconContainer.margin * RATIO.tablet}px 0;

  @media ${device.laptopL} {
    margin: ${FIXED_VAL.iconContainer.margin * RATIO.laptop}px 0;
  }

  @media ${device.desktopL} {
    margin: ${FIXED_VAL.iconContainer.margin}px 0;
  }
`;
