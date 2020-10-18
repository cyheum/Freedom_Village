import React, { useState } from "react";
import styled from "styled-components";

export const MainContainer = () => {
  const [hoveredAt, setHoveredAt] = useState<string | null>(null);
  const [clickedAt, setClickedAt] = useState<number>(3);

  return (
    <MapContainer>
      {IMAGE_DATA.map((item, idx) => {
        const { id, normal, hover } = item;

        return (
          <House
            key={id}
            src={hoveredAt === id ? hover : normal}
            idx={idx}
            onClick={() => setClickedAt(idx)}
            onMouseEnter={() => setHoveredAt(id)}
            onMouseLeave={() => setHoveredAt(null)}
          />
        );
      })}
      <Human src="/Images/human.png" idx={clickedAt} />
    </MapContainer>
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
