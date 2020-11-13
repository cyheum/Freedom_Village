import LeftDetailContainer from "components/molecular/LeftDetailContainer";
import RightDetailContainer from "components/molecular/RightDetailContainer";
import React from "react";
import styled from "styled-components";

interface IProp {
  mapImgSrc: string;
  roadImgSrc: string;
  leftTopImgSrc: string;
  rightTopImgSrc: string;
  rightBottomImgSrc: string;
  storeLogoScr: string;
}

export const ItemModal: React.FC<IProp> = ({
  mapImgSrc,
  roadImgSrc,
  leftTopImgSrc,
  rightTopImgSrc,
  rightBottomImgSrc,
  storeLogoScr,
}) => {
  return (
    <STDModal>
      <LeftDetailContainer
        mapImgSrc={mapImgSrc}
        roadImgSrc={roadImgSrc}
        leftTopImgSrc={leftTopImgSrc}
      />
      <RightDetailContainer
        storeLogoScr={storeLogoScr}
        rightTopImgSrc={rightTopImgSrc}
        rightBottomImgSrc={rightBottomImgSrc}
      />
    </STDModal>
  );
};

const STDModal = styled.div`
  position: absolute;
  display: flex;
  width: 1000px;
  height: 80vh;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.1);
  background: white;
  overflow: hidden;
`;
