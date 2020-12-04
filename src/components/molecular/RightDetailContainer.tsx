import React from "react";
import styled, { css } from "styled-components";
import { device } from "styles/theme";
import StoreDetailDescription from "../atomic/StoreDetailDescription";

interface IData {
  iconSrc: string;
  description: string;
  textWidth: number;
  textHeight: number;
}

interface IProp {
  rightTopImgSrc: string;
  rightBottomImgSrc: string;
  topEmptyBlur: string;
  bottomEmptyBlur: string;
  rightTopData: IData[];
  rightBottomData: IData[];
  isRightClicked: boolean;
  rightClickToggle: (bool: boolean) => void;
}

const RightDetailContainer: React.FC<IProp> = ({
  rightTopImgSrc,
  rightBottomImgSrc,
  topEmptyBlur,
  bottomEmptyBlur,
  rightTopData,
  rightBottomData,
  isRightClicked,
  rightClickToggle,
}) => {
  return (
    <STDContainer onClick={() => rightClickToggle(true)}>
      <STDTopContainer>
        {!isRightClicked && (
          <STDTopBlurBox src={topEmptyBlur} alt="storeLogo" />
        )}
        <STDTopImgContainer
          alt="storeImg2"
          src={rightTopImgSrc}
        ></STDTopImgContainer>
      </STDTopContainer>
      <STDIconsContainer>
        {rightTopData.map(
          ({ iconSrc, description, textWidth, textHeight }, idx) => {
            return (
              <StoreDetailDescription
                key={idx}
                iconSrc={iconSrc}
                description={description}
                textWidth={textWidth}
                textHeight={textHeight}
              />
            );
          }
        )}
      </STDIconsContainer>
      <STDBottomContainer>
        {!isRightClicked && <STDBottomBlurBox emptyBlur={bottomEmptyBlur} />}
        <STDBottomImgContainer
          alt="storeImg2"
          src={rightBottomImgSrc}
        ></STDBottomImgContainer>
      </STDBottomContainer>
      <STDIconsContainer>
        {rightBottomData.map(
          ({ iconSrc, description, textWidth, textHeight }, idx) => {
            return (
              <StoreDetailDescription
                key={idx}
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
  container: { width: 720, height: 1080 },
  topContainer: { width: 670, height: 440 },
  bottomContainer: { width: 670, height: 325 },
};

const STDContainer = styled.div`
  padding: ${25 * 0.4}px;
  padding-bottom: 0;
  width: ${FIXED_VAL.container.width * 0.4}px;
  height: ${FIXED_VAL.container.height * 0.4}px;

  @media ${device.laptopL} {
    padding: ${25 * 0.6}px;
    padding-bottom: 0;
    width: ${FIXED_VAL.container.width * 0.6}px;
    height: ${FIXED_VAL.container.height * 0.6}px;
  }

  @media ${device.desktopL} {
    padding: 25px;
    padding-bottom: 0;
    width: ${FIXED_VAL.container.width}px;
    height: ${FIXED_VAL.container.height}px;
  }
`;

const STDTopContainer = styled.div`
  position: relative;
  width: ${FIXED_VAL.topContainer.width * 0.4}px;
  height: ${FIXED_VAL.topContainer.height * 0.4}px;

  @media ${device.laptopL} {
    width: ${FIXED_VAL.topContainer.width * 0.6}px;
    height: ${FIXED_VAL.topContainer.height * 0.6}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_VAL.topContainer.width}px;
    height: ${FIXED_VAL.topContainer.height}px;
  }
`;

const STDBottomContainer = styled.div`
  position: relative;
  width: ${FIXED_VAL.bottomContainer.width * 0.4}px;
  height: ${FIXED_VAL.bottomContainer.height * 0.4}px;

  @media ${device.laptopL} {
    width: ${FIXED_VAL.bottomContainer.width * 0.6}px;
    height: ${FIXED_VAL.bottomContainer.height * 0.6}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_VAL.bottomContainer.width}px;
    height: ${FIXED_VAL.bottomContainer.height}px;
  }
`;

const STDTopBlurBox = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const STDTopImgContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const STDBottomBlurBox = styled.div<{ emptyBlur: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ emptyBlur }) => css`
    background: url(${emptyBlur});
    background-size: cover;
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
  margin-top: ${30 * 0.4}px;
  margin-bottom: ${30 * 0.4}px;

  @media ${device.laptopL} {
    margin-top: ${30 * 0.6}px;
    margin-bottom: ${30 * 0.6}px;
  }

  @media ${device.desktopL} {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
