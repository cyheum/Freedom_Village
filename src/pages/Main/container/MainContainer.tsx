import React, { useState } from "react";
import { MainScreen } from "../Screens/MainScreen";
import { ModalScreen } from "../Screens/ModalScreen";
import { useGetActiveModal } from "hooks";

export const MainContainer = () => {
  const [hoveredAt, setHoveredAt] = useState<string | null>(null);
  const [isLeftClicked, setIsLeftClicked] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);
  const activeModal = useGetActiveModal();

  const leftClickToggle = (bool: boolean) => {
    setIsLeftClicked(bool);
  };

  const rightClickToggle = (bool: boolean) => {
    setIsRightClicked(bool);
  };

  return (
    <>
      <MainScreen
        mainData={MAIN_DATA}
        hoveredAt={hoveredAt}
        setHoveredAt={setHoveredAt}
      />
      {activeModal !== null && (
        <ModalScreen
          rightData={RIGHTDATA}
          isLeftClicked={isLeftClicked}
          isRightClicked={isRightClicked}
          leftClickToggle={leftClickToggle}
          rightClickToggle={rightClickToggle}
        />
      )}
    </>
  );
};

const MAIN_DATA = [
  {
    marginTop: 236,
    descriptionImgData: [
      {
        id: "1",
        imgSrc: "/Images/hoho.png",
      },
      {
        id: "2",
        imgSrc: "/Images/pianoForest.png",
      },
      {
        id: "3",
        imgSrc: "/Images/PM.png",
      },
      {
        id: "4",
        imgSrc: "/Images/inTheBegining.png",
      },
      {
        id: "5",
        imgSrc: "/Images/karaban.png",
      },
    ],
  },
  {
    marginTop: 90,
    descriptionImgData: [
      {
        id: "6",
        imgSrc: "/Images/nangman.png",
      },
      {
        id: "7",
        imgSrc: "/Images/seoulSoul.png",
      },
      {
        id: "8",
        imgSrc: "/Images/hPlay.png",
      },
      {
        id: "9",
        imgSrc: "/Images/konOnPlate.png",
      },
      {
        id: "10",
        imgSrc: "/Images/noni.png",
      },
    ],
  },
];

const RIGHTDATA = {
  rightTopData: [
    {
      iconSrc: "/Images/icon1.png",
      description: "브랜드 스토리",
      textWidth: 165,
      textHeight: 85,
    },
    {
      iconSrc: "/Images/icon2.png",
      description: "제품, 서비스",
      textWidth: 145,
      textHeight: 85,
    },
    {
      iconSrc: "/Images/icon3.png",
      description: "오시는 길",
      textWidth: 105,
      textHeight: 85,
    },
  ],
  rightBottomData: [
    {
      iconSrc: "/Images/icon4.png",
      description: "SNS",
      textWidth: 165,
      textHeight: 85,
    },
    {
      iconSrc: "/Images/icon5.png",
      description: "이벤트",
      textWidth: 145,
      textHeight: 85,
    },
    {
      iconSrc: "/Images/icon6.png",
      description: "Q & A",
      textWidth: 105,
      textHeight: 85,
    },
  ],
};
