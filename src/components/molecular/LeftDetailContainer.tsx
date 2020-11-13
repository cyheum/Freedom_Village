import React from "react";
import styled, { css } from "styled-components";

interface IProp {
  mapImgSrc: string;
  roadImgSrc: string;
  leftTopImgSrc: string;
}

const LeftDetailContainer: React.FC<IProp> = ({
  mapImgSrc,
  roadImgSrc,
  leftTopImgSrc,
}) => {
  return (
    <STDContainer>
      <STDLeftMap mapImgSrc={mapImgSrc} />
      <STDLeftTopImg src={leftTopImgSrc} alt="storeImg" />
      <STDRoadLogo roadImgSrc={roadImgSrc} />
    </STDContainer>
  );
};

export default LeftDetailContainer;

const STDContainer = styled.div`
  position: relative;
  width: 55%;
  height: 100%;
`;

const STDLeftMap = styled.div<{ mapImgSrc: string }>`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  ${({ mapImgSrc }) =>
    css`
      background: url(${mapImgSrc});
      background-size: cover;
    `}
`;

const STDLeftTopImg = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const STDRoadLogo = styled.div<{ roadImgSrc: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin: -150px 0 0 -150px;
  ${({ roadImgSrc }) => css`
    background: url(${roadImgSrc});
    background-size: cover;
  `}
`;
