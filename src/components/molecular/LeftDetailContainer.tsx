import React from "react";
import styled, { css, keyframes } from "styled-components";
import mixin from "styles/mixin";
import { device } from "styles/theme";

interface ILabel {
  type: string;
  positionX: number;
  positionY: number;
}

interface ILogo {
  roadImgSrc: string;
  isLeftFadeoutOn: boolean;
}

interface IProp extends ILabel, ILogo {
  labelSrc: string;
  mapImgSrc: string;
  isLeftClicked: boolean;
  onClickSetFadeout: () => void;
}

const LeftDetailContainer: React.FC<IProp> = ({
  type,
  labelSrc,
  positionX,
  positionY,
  mapImgSrc,
  roadImgSrc,
  isLeftClicked,
  isLeftFadeoutOn,
  onClickSetFadeout,
}) => {
  return (
    <STDContainer>
      <STDLabel
        alt="label"
        src={labelSrc}
        positionX={positionX}
        positionY={positionY}
        type={type}
      />
      <STDLeftMap mapImgSrc={mapImgSrc} />
      {!isLeftClicked && (
        <STDRoadLogo
          roadImgSrc={roadImgSrc}
          isLeftFadeoutOn={isLeftFadeoutOn}
          onClick={() => onClickSetFadeout()}
        />
      )}
    </STDContainer>
  );
};

export default LeftDetailContainer;

const fadeout = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const FIXED_VAL = {
  container: {
    width: 1200 * 0.8,
    height: 1080 * 0.8,
  },
  label: {
    width: 165 * 0.8,
    height: 45 * 0.8,
  },
};

const STDContainer = styled.div`
  position: relative;
  ${mixin.dynamicScreen(FIXED_VAL.container.width, FIXED_VAL.container.height)}
`;

const STDLeftMap = styled.div<{ mapImgSrc: string }>`
  width: 100%;
  height: 100%;
  ${({ mapImgSrc }) =>
    css`
      background: url(${mapImgSrc});
      background-size: cover;
    `}
`;

const STDRoadLogo = styled.div<ILogo>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100%;
  ${({ roadImgSrc }) => css`
    background: url(${roadImgSrc});
    background-size: contain;
  `}
  ${({ isLeftFadeoutOn }) =>
    isLeftFadeoutOn &&
    css`
      animation: ${fadeout} 1200ms linear normal forwards;
    `}
`;

const STDLabel = styled.img<ILabel>`
  position: absolute;
  z-index: 1000;
  ${({ type, positionX, positionY }) => css`
    width: ${FIXED_VAL.label.width * 0.4};
    height: ${FIXED_VAL.label.height * 0.4}px;
    ${mixin.getPosition(type, positionX * 0.4, positionY * 0.4)}

    @media ${device.laptopL} {
      width: ${FIXED_VAL.label.width * 0.6}px;
      height: ${FIXED_VAL.label.height * 0.6}px;
      ${mixin.getPosition(type, positionX * 0.6, positionY * 0.6)}
    }

    @media ${device.desktopL} {
      width: ${FIXED_VAL.label.width}px;
      height: ${FIXED_VAL.label.height}px;
      ${mixin.getPosition(type, positionX, positionY)}
    }
  `}
`;
