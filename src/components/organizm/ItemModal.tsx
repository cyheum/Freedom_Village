import React from "react";
import styled from "styled-components";
import LeftDetailContainer from "../molecular/LeftDetailContainer";
import RightDetailContainer from "../molecular/RightDetailContainer";
import { device } from "styles/theme";

interface IData {
  iconSrc: string;
  description: string;
  textWidth: number;
  textHeight: number;
}

interface IProp {
  mapImgSrc: string;
  roadImgSrc: string;
  rightTopImgSrc: string;
  rightBottomImgSrc: string;
  storeLogoScr: string;
  emptyBlur: string;
  rightTopData: IData[];
  rightBottomData: IData[];
}

export const ItemModal: React.FC<IProp> = ({
  mapImgSrc,
  roadImgSrc,
  rightTopImgSrc,
  rightBottomImgSrc,
  storeLogoScr,
  emptyBlur,
  rightTopData,
  rightBottomData,
}) => {
  return (
    <STDModal>
      <LeftDetailContainer mapImgSrc={mapImgSrc} roadImgSrc={roadImgSrc} />
      <RightDetailContainer
        storeLogoScr={storeLogoScr}
        rightTopImgSrc={rightTopImgSrc}
        rightTopData={rightTopData}
        rightBottomImgSrc={rightBottomImgSrc}
        rightBottomData={rightBottomData}
        emptyBlur={emptyBlur}
      />
    </STDModal>
  );
};

const FIXED_VAL = {
  width: 1920,
  height: 1080,
};

const STDModal = styled.div`
  position: absolute;
  display: flex;
  width: ${FIXED_VAL.width * 0.4}px;
  height: ${FIXED_VAL.height * 0.4}px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.1);
  background: white;
  overflow: hidden;

  @media ${device.laptopL} {
    width: ${FIXED_VAL.width * 0.6}px;
    height: ${FIXED_VAL.height * 0.6}px;
  }

  @media ${device.desktopL} {
    width: ${FIXED_VAL.width}px;
    height: ${FIXED_VAL.height}px;
  }
`;
