import React from "react";
import styled, { css } from "styled-components";
import { device } from "styles/theme";

interface IContainer {
  id: string;
  width: number;
  height: number;
  hoveredAt: string | null;
}

interface IProp extends IContainer {
  descriptionImgSrc: string;
  changeActiveModal: (id: string | null) => void;
  setHoveredAt: (id: string | null) => void;
}

const StoreMainDescription: React.FC<IProp> = ({
  id,
  width,
  height,
  hoveredAt,
  descriptionImgSrc,
  changeActiveModal,
  setHoveredAt,
}) => {
  return (
    <STDContainer
      id={id}
      hoveredAt={hoveredAt}
      width={width}
      height={height}
      onClick={() => changeActiveModal(id)}
      onMouseEnter={() => setHoveredAt(id)}
      onMouseLeave={() => setHoveredAt(null)}
    >
      <img alt="storeDescription_image" src={descriptionImgSrc} />
    </STDContainer>
  );
};

export default StoreMainDescription;

const STDContainer = styled.div<IContainer>`
  ${({ width, height, hoveredAt, id }) => css`
    width: ${width * 0.4}px;
    height: ${height * 0.4}px;
    cursor: pointer;
    opacity: ${hoveredAt === id && 0.5};
    transition: opacity 500;

    @media ${device.laptopL} {
      width: ${width * 0.6}px;
      height: ${height * 0.6}px;
    }

    @media ${device.desktopL} {
      width: ${width}px;
      height: ${height}px;
    }
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
