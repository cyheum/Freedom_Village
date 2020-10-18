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
    <MapContainer>
      {images.map((item, idx) => {
        const { id, normal, hover } = item;

        return (
          <House
            key={id}
            src={hoveredAt === id ? hover : normal}
            idx={idx}
            onClick={() => changeClickedAndModal(id, idx)}
            onMouseEnter={() => setHoveredAt(id)}
            onMouseLeave={() => setHoveredAt(null)}
          />
        );
      })}
      <Human src="/Images/human.png" idx={clickedAt} />
    </MapContainer>
  );
};

const MAP_HEIGHT = window.innerHeight;

const MapContainer = styled.div`
  display: flex;
  width: ${MAP_HEIGHT}px;
  height: ${MAP_HEIGHT}px;
  margin: 0 auto;
  position: relative;
  background-image: url("/Images/road.png");
  background-position: center;
`;

const House = styled.img`
  width: 250px;
  height: 250px;
  margin-top: ${({ idx }: { idx: number }) => `${300 - 140 * idx}px`};
  cursor: pointer;
`;

const Human = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 200px;
  top: 180px;
  transform: translate(
    -${({ idx }: { idx: number }) => (3 - idx) * 180}px,
    ${({ idx }: { idx: number }) => (3 - idx) * 110}px
  );
  transition: transform 1s ease-out;
`;
