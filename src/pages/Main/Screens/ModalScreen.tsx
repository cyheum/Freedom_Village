import React, { useEffect } from "react";
import styled from "styled-components";
import { ItemModal } from "components";
import { useDispatch } from "react-redux";
import { modalToggle } from "modules";
import { useGetData } from "hooks";
import mixin from "styles/mixin";

interface IData {
  iconSrc: string;
  description: string;
  textWidth: number;
  textHeight: number;
}

interface IProp {
  rightData: {
    rightTopData: IData[];
    rightBottomData: IData[];
  };
  isLeftClicked: boolean;
  isRightClicked: boolean;
  isFadeoutOn: boolean;
  leftClickToggle: (bool: boolean) => void;
  rightClickToggle: (bool: boolean) => void;
  onClickFadeout: () => void;
  onClickSetFadeout: (bool: boolean) => void;
}

export const ModalScreen: React.FC<IProp> = ({
  rightData,
  isLeftClicked,
  isRightClicked,
  isFadeoutOn,
  leftClickToggle,
  rightClickToggle,
  onClickFadeout,
  onClickSetFadeout,
}) => {
  const currentData = useGetData();
  const dispatch = useDispatch();
  const {
    type,
    label,
    rightTopImgSrc,
    rightBottomImgSrc,
    positionY,
    positionX,
  } = currentData;

  useEffect(() => {
    return () => {
      leftClickToggle(false);
      rightClickToggle(false);
      onClickSetFadeout(false);
    };
  }, []);

  return (
    <STDContainer>
      <STDemtpty onClick={() => dispatch(modalToggle(null))} />
      <ItemModal
        mapImgSrc={`/Images/${
          currentData.type === "LEFT_TOP_LIST" ||
          currentData.type === "LEFT_BOTTOM_LIST"
            ? "leftMap2"
            : "leftMap1"
        }.png`}
        type={type}
        labelSrc={label}
        positionX={positionX}
        positionY={positionY}
        roadImgSrc={"/Images/streetLogo.png"}
        rightTopImgSrc={rightTopImgSrc}
        rightBottomImgSrc={rightBottomImgSrc}
        topEmptyBlur={"/Images/emptyBlur1.png"}
        bottomEmptyBlur={"/Images/emptyBlur2.png"}
        rightTopData={rightData.rightTopData}
        rightBottomData={rightData.rightBottomData}
        isLeftClicked={isLeftClicked}
        isRightClicked={isRightClicked}
        isFadeoutOn={isFadeoutOn}
        leftClickToggle={leftClickToggle}
        rightClickToggle={rightClickToggle}
        onClickFadeout={onClickFadeout}
        onClickSetFadeout={onClickSetFadeout}
      />
    </STDContainer>
  );
};

const STDContainer = styled.div`
  position: fixed;
  top: 0;
  ${mixin.flexSet()};
  width: 100%;
  z-index: 10000;
`;

const STDemtpty = styled.div`
  width: 100%;
  height: 100vh;
`;
