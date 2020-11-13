import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { modalToggle } from "modules/store";

type Images = {
  id: string;
  normal: string;
  hover: string;
};

interface IProp {
  images: Images[];
  hoveredAt: string | null;
  clickedAt: number;
  setHoveredAt: (id: string | null) => void;
  setClickedAt: (idx: number) => void;
}

export const MainScreen: React.FC<IProp> = ({
  images,
  hoveredAt,
  clickedAt,
  setHoveredAt,
  setClickedAt,
}) => {
  const dispatch = useDispatch();

  const changeClickedAndModal = (id: string, idx: number) => {
    dispatch(modalToggle(id));
    setClickedAt(idx);
  };

  return (
    <STDMapContainer>
      {images.map((item, idx) => {
        const { id, normal, hover } = item;

        return (
          <STDHouse
            key={id}
            src={hoveredAt === id ? hover : normal}
            idx={idx}
            onClick={() => changeClickedAndModal(id, idx)}
            onMouseEnter={() => setHoveredAt(id)}
            onMouseLeave={() => setHoveredAt(null)}
          />
        );
      })}
    </STDMapContainer>
  );
};

const MAP_HEIGHT = window.innerHeight;

const STDMapContainer = styled.div`
  display: flex;
  width: ${MAP_HEIGHT}px;
  height: ${MAP_HEIGHT}px;
  margin: 0 auto;
  position: relative;
  background-image: url("/Images/road.png");
  background-position: center;
`;

const STDHouse = styled.img`
  width: 200px;
  height: 200px;
  margin-top: ${({ idx }: { idx: number }) => `${200 - 100 * idx}px`};
  cursor: pointer;
`;
