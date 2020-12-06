import React from "react";
import styled from "styled-components";
import LeftDetailContainer from "../molecular/LeftDetailContainer";
import RightDetailContainer from "../molecular/RightDetailContainer";
import mixin from "styles/mixin";

interface IData {
  iconSrc: string;
  description: string;
  textWidth: number;
  textHeight: number;
}

interface IProp {
  type: string;
  labelSrc: string;
  positionX: number;
  positionY: number;
  mapImgSrc: string;
  roadImgSrc: string;
  rightTopImgSrc: string;
  rightBottomImgSrc: string;
  topEmptyBlur: string;
  bottomEmptyBlur: string;
  rightTopData: IData[];
  rightBottomData: IData[];
  isLeftClicked: boolean;
  isRightClicked: boolean;
  isFadeoutOn: boolean;
  leftClickToggle: (bool: boolean) => void;
  rightClickToggle: (bool: boolean) => void;
  onClickFadeout: () => void;
  onClickSetFadeout: (bool: boolean) => void;
}

export const ItemModal: React.FC<IProp> = ({
  type,
  labelSrc,
  positionX,
  positionY,
  mapImgSrc,
  roadImgSrc,
  rightTopImgSrc,
  rightBottomImgSrc,
  topEmptyBlur,
  bottomEmptyBlur,
  rightTopData,
  rightBottomData,
  isLeftClicked,
  isRightClicked,
  isFadeoutOn,
  leftClickToggle,
  rightClickToggle,
  onClickSetFadeout,
}) => {
  return (
    <STDModal>
      <LeftDetailContainer
        type={type}
        labelSrc={labelSrc}
        positionX={positionX}
        positionY={positionY}
        mapImgSrc={mapImgSrc}
        roadImgSrc={roadImgSrc}
        isLeftClicked={isLeftClicked}
        isFadeoutOn={isFadeoutOn}
        onClickSetFadeout={() => {
          onClickSetFadeout(true);
          setTimeout(() => leftClickToggle(true), 1200);
        }}
      />
      <RightDetailContainer
        topEmptyBlur={topEmptyBlur}
        rightTopImgSrc={rightTopImgSrc}
        rightTopData={rightTopData}
        rightBottomImgSrc={rightBottomImgSrc}
        rightBottomData={rightBottomData}
        bottomEmptyBlur={bottomEmptyBlur}
        isRightClicked={isRightClicked}
        rightClickToggle={rightClickToggle}
      />
    </STDModal>
  );
};

const FIXED_VAL = {
  width: 1920 * 0.8,
  height: 1080 * 0.8,
};

const STDModal = styled.div`
  position: absolute;
  display: flex;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.1);
  background: white;
  overflow: hidden;
  ${mixin.dynamicScreen(FIXED_VAL.width, FIXED_VAL.height)}
`;
