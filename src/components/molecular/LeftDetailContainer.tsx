import React from "react";
import styled, { css } from "styled-components";
import { device } from "styles/theme";

interface IProp {
  mapImgSrc: string;
  roadImgSrc: string;
  isLeftClicked: boolean;
  leftClickToggle: (bool: boolean) => void;
}

const LeftDetailContainer: React.FC<IProp> = ({
  mapImgSrc,
  roadImgSrc,
  isLeftClicked,
  leftClickToggle,
}) => {
  return (
    <STDContainer>
      <STDLeftMap mapImgSrc={mapImgSrc} />
      {!isLeftClicked && (
        <STDRoadLogo
          roadImgSrc={roadImgSrc}
          onClick={() => leftClickToggle(true)}
        />
      )}
    </STDContainer>
  );
};

export default LeftDetailContainer;

const FIXED_VAL = {
  width: 1200,
  height: 1080,
};

const STDContainer = styled.div`
  position: relative;
  width: ${FIXED_VAL.width * 0.4}px;
  height: ${FIXED_VAL.height * 0.4}px;

  @media ${device.laptopL} {
    width: ${FIXED_VAL.width * 0.6}px;
    height: ${FIXED_VAL.height * 0.6}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_VAL.width}px;
    height: ${FIXED_VAL.height}px;
  }
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

const STDRoadLogo = styled.div<{ roadImgSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ roadImgSrc }) => css`
    background: url(${roadImgSrc});
    background-size: contain;
  `}
`;
