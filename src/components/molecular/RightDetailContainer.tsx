import React from "react";
import styled from "styled-components";

interface IProp {
  rightTopImgSrc: string;
  rightBottomImgSrc: string;
  storeLogoScr: string;
}

const RightDetailContainer: React.FC<IProp> = ({
  rightTopImgSrc,
  rightBottomImgSrc,
  storeLogoScr,
}) => {
  return (
    <STDContainer>
      <STDStoreLogo src={storeLogoScr} alt="storeLogo" />
      <STDTopImgContainer>
        <img alt="storeImg2" src={rightTopImgSrc} />
      </STDTopImgContainer>
      <STDBottomImgContainer>
        <img alt="storeImg3" src={rightBottomImgSrc} />
      </STDBottomImgContainer>
    </STDContainer>
  );
};

export default RightDetailContainer;

const STDContainer = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
`;

const STDStoreLogo = styled.img`
  position: absolute;
  top: 50px;
  right: 50%;
  width: 200px;
  height: 200px;
  margin-right: -100px;
`;

const STDTopImgContainer = styled.div`
  width: 100%;
  height: 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }
`;

const STDBottomImgContainer = styled.div`
  width: 100%;
  height: 40%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
