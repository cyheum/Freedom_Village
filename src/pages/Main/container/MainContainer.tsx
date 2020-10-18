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
      {activeModal !== null && <ModalScreen />}
    </>
  );
};

const IMAGE_DATA = [
  {
    id: "1",
    normal: "/Images/house_normal1.png",
    hover: "/Images/house_hover1.png",
  },
  {
    id: "2",
    normal: "/Images/house_normal2.png",
    hover: "/Images/house_hover2.png",
  },
  {
    id: "3",
    normal: "/Images/house_normal3.png",
    hover: "/Images/house_hover3.png",
  },
];
