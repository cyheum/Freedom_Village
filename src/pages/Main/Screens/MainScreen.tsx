import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { modalToggle } from "modules/store";
import { device } from "styles/theme";
import mixin from "styles/mixin";

type Images = {
  id: string;
  imgSrc: string;
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
    <STDContainer>
      <STDMapContainer>
        {images.map(({ id, imgSrc }, idx) => (
          <STDStore
            key={id}
            src={imgSrc}
            id={id}
            hoveredAt={hoveredAt}
            onClick={() => changeClickedAndModal(id, idx)}
            onMouseEnter={() => setHoveredAt(id)}
            onMouseLeave={() => setHoveredAt(null)}
          />
        ))}
      </STDMapContainer>
    </STDContainer>
  );
};

const MAP_LENGTH = {
  width: 1920,
  height: 1080,
};

const STDContainer = styled.div`
  ${mixin.flexSet()}
  height: 100vh;
  width: 100%;
`;

const STDMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: ${MAP_LENGTH.width * 0.4}px;
  height: ${MAP_LENGTH.height * 0.4}px;
  background-image: url("/Images/mainMap.jpg");
  background-size: cover;
  background-position: center;

  @media ${device.laptopL} {
    width: ${MAP_LENGTH.width * 0.6}px;
    height: ${MAP_LENGTH.height * 0.6}px;
  }

  @media ${device.desktopL} {
    width: ${MAP_LENGTH.width}px;
    height: ${MAP_LENGTH.height}px;
  }
`;

const STDStore = styled.img<{ hoveredAt: string | null; id: string }>`
  width: 200px;
  height: 200px;
  transition: opacity 500;
  cursor: pointer;
  ${({ hoveredAt, id }) => hoveredAt === id && `opacity: 0.5`}
`;
