import React, { useState } from "react";
import { MainScreen } from "../Screens/MainScreen";
import { ModalScreen } from "../Screens/ModalScreen";
import { useGetActiveModal } from "hooks";

export const MainContainer = () => {
  const [hoveredAt, setHoveredAt] = useState<string | null>(null);
  const [clickedAt, setClickedAt] = useState<number>(3);
  const activeModal = useGetActiveModal();

  return (
    <>
      <MainScreen
        images={IMAGE_DATA}
        hoveredAt={hoveredAt}
        clickedAt={clickedAt}
        setHoveredAt={setHoveredAt}
        setClickedAt={setClickedAt}
      />
      {activeModal !== null && <ModalScreen rightData={RIGHTDATA} />}
    </>
  );
};

const IMAGE_DATA = [
  {
    id: "1",
    imgSrc: "/Images/house_normal1.png",
  },
  {
    id: "2",
    imgSrc: "/Images/house_normal2.png",
  },
  {
    id: "3",
    imgSrc: "/Images/house_normal3.png",
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
