import React, { useState } from "react";
import { ModalScreen } from "../Screens/ModalScreen";

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
}

const ModalContainer: React.FC<IProp> = ({ rightData }) => {
  const [isLeftClicked, setIsLeftClicked] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);
  const [isLeftFadeoutOn, setIsLeftFadeoutOn] = useState(false);
  const [isRightFadeoutOn, setIsRightFadeoutOn] = useState(false);

  const leftClickToggle = (bool: boolean) => {
    setIsLeftClicked(bool);
  };

  const rightClickToggle = (bool: boolean) => {
    setIsRightClicked(bool);
  };

  const onClickSetFadeout = (spot: string, bool: boolean) => {
    if (spot === "left") setIsLeftFadeoutOn(bool);
    if (spot === "right") setIsRightFadeoutOn(bool);
  };

  return (
    <ModalScreen
      rightData={rightData}
      isLeftClicked={isLeftClicked}
      isRightClicked={isRightClicked}
      isLeftFadeoutOn={isLeftFadeoutOn}
      isRightFadeoutOn={isRightFadeoutOn}
      leftClickToggle={leftClickToggle}
      rightClickToggle={rightClickToggle}
      onClickSetFadeout={onClickSetFadeout}
    />
  );
};

export default ModalContainer;
