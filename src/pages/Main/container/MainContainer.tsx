import React, { useState } from "react";
import { MainScreen } from "../Screens/MainScreen";
import { ModalScreen } from "../Screens/ModalScreen";
import { useGetActiveModal } from "hooks";

export const MainContainer = () => {
  const [isLeftClicked, setIsLeftClicked] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);
  const [isFadeoutOn, setIsFadeoutOn] = useState(false);
  const activeModal = useGetActiveModal();

  const leftClickToggle = (bool: boolean) => {
    setIsLeftClicked(bool);
  };

  const rightClickToggle = (bool: boolean) => {
    setIsRightClicked(bool);
  };

  const onClickFadeout = () => {
    setIsFadeoutOn(true);
    setTimeout(() => setIsLeftClicked(true), 1300);
  };

  const onClickSetFadeout = (bool: boolean) => {
    setIsFadeoutOn(bool);
  };

  return (
    <>
      <MainScreen mainData={MAIN_DATA} />
      {activeModal !== null && (
        <ModalScreen
          rightData={RIGHTDATA}
          isLeftClicked={isLeftClicked}
          isRightClicked={isRightClicked}
          isFadeoutOn={isFadeoutOn}
          leftClickToggle={leftClickToggle}
          rightClickToggle={rightClickToggle}
          onClickFadeout={onClickFadeout}
          onClickSetFadeout={onClickSetFadeout}
        />
      )}
    </>
  );
};

const MAIN_DATA = [
  {
    marginTop: 236,
    storeData: [
      {
        id: "1",
        type: "LEFT_TOP_LIST",
        imgSrc: "/Images/hoho/hoho.png",
        label: "/Images/hoho/label.png",
        rightTopImgSrc: "/Images/hoho/img1.png",
        rightBottomImgSrc: "/Images/hoho/img2.png",
        positionX: 100 * 0.8,
        positionY: 245 * 0.8,
      },
      {
        id: "2",
        type: "LEFT_TOP_LIST",
        imgSrc: "/Images/pianoForest/pianoForest.png",
        label: "/Images/pianoForest/label.png",
        rightTopImgSrc: "/Images/pianoForest/img1.png",
        rightBottomImgSrc: "/Images/pianoForest/img2.png",
        positionX: 100 * 0.8,
        positionY: 365 * 0.8,
      },
      {
        id: "3",
        type: "LEFT_TOP_LIST",
        imgSrc: "/Images/PM/PM.png",
        label: "/Images/PM/label.png",
        rightTopImgSrc: "/Images/PM/img1.png",
        rightBottomImgSrc: "/Images/PM/img2.png",
        positionX: 100 * 0.8,
        positionY: 438 * 0.8,
      },
      {
        id: "4",
        type: "LEFT_BOTTOM_LIST",
        imgSrc: "/Images/inTheBegining/inTheBegining.png",
        label: "/Images/inTheBegining/label.png",
        rightTopImgSrc: "/Images/inTheBegining/img1.png",
        rightBottomImgSrc: "/Images/inTheBegining/img2.png",
        positionX: 595 * 0.8,
        positionY: 423 * 0.8,
      },
      {
        id: "5",
        type: "LEFT_BOTTOM_LIST",
        imgSrc: "/Images/karaban/karaban.png",
        label: "/Images/karaban/label.png",
        rightTopImgSrc: "/Images/karaban/img1.png",
        rightBottomImgSrc: "/Images/karaban/img2.png",
        positionX: 421 * 0.8,
        positionY: 225 * 0.8,
      },
    ],
  },
  {
    marginTop: 90,
    storeData: [
      {
        id: "6",
        type: "LEFT_BOTTOM_LIST",
        imgSrc: "/Images/nangman/nangman.png",
        label: "/Images/nangman/label.png",
        rightTopImgSrc: "/Images/nangman/img1.png",
        rightBottomImgSrc: "/Images/nangman/img2.png",
        positionX: 421 * 0.8,
        positionY: 156 * 0.8,
      },
      {
        id: "7",
        type: "RIGHT_LIST",
        imgSrc: "/Images/seoulSoul/seoulSoul.png",
        label: "/Images/seoulSoul/label.png",
        rightTopImgSrc: "/Images/seoulSoul/img1.png",
        rightBottomImgSrc: "/Images/seoulSoul/img2.png",
        positionX: 500 * 0.8,
        positionY: 583 * 0.8,
      },
      {
        id: "8",
        type: "RIGHT_LIST",
        imgSrc: "/Images/hPlay/hPlay.png",
        label: "/Images/hPlay/label.png",
        rightTopImgSrc: "/Images/hPlay/img1.png",
        rightBottomImgSrc: "/Images/hPlay/img2.png",
        positionX: 140 * 0.8,
        positionY: 637 * 0.8,
      },
      {
        id: "9",
        type: "RIGHT_LIST",
        imgSrc: "/Images/konOnPlate/konOnPlate.png",
        label: "/Images/konOnPlate/label.png",
        rightTopImgSrc: "/Images/konOnPlate/img1.png",
        rightBottomImgSrc: "/Images/konOnPlate/img2.png",
        positionX: 140 * 0.8,
        positionY: 525 * 0.8,
      },
      {
        id: "10",
        type: "RIGHT_LIST",
        imgSrc: "/Images/noni/noni.png",
        label: "/Images/noni/label.png",
        rightTopImgSrc: "/Images/noni/img1.png",
        rightBottomImgSrc: "/Images/noni/img2.png",
        positionX: 60 * 0.8,
        positionY: 388 * 0.8,
      },
    ],
  },
];

const RIGHTDATA = {
  rightTopData: [
    {
      iconSrc: "/Images/icon1.png",
      description: "브랜드 스토리",
      textWidth: 165 * 0.8,
      textHeight: 85 * 0.8,
    },
    {
      iconSrc: "/Images/icon2.png",
      description: "제품, 서비스",
      textWidth: 145 * 0.8,
      textHeight: 85 * 0.8,
    },
    {
      iconSrc: "/Images/icon3.png",
      description: "오시는 길",
      textWidth: 105 * 0.8,
      textHeight: 85 * 0.8,
    },
  ],
  rightBottomData: [
    {
      iconSrc: "/Images/icon4.png",
      description: "SNS",
      textWidth: 165 * 0.8,
      textHeight: 85 * 0.8,
    },
    {
      iconSrc: "/Images/icon5.png",
      description: "이벤트",
      textWidth: 145 * 0.8,
      textHeight: 85 * 0.8,
    },
    {
      iconSrc: "/Images/icon6.png",
      description: "Q & A",
      textWidth: 105 * 0.8,
      textHeight: 85 * 0.8,
    },
  ],
};
