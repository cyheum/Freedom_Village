import React from "react";
import styled, { css } from "styled-components";
import { device } from "styles/theme";
import StoreMainDescription from "../atomic/StoreMainDescription";

interface IData {
  id: string;
  imgSrc: string;
}

interface IContainerProp {
  marginTop: number;
}

interface IProp extends IContainerProp {
  hoveredAt: string | null;
  descriptionImgData: IData[];
  changeActiveModal: (id: string | null) => void;
  setHoveredAt: (id: string | null) => void;
}

export const MainDescriptionContainer: React.FC<IProp> = ({
  hoveredAt,
  marginTop,
  descriptionImgData,
  changeActiveModal,
  setHoveredAt,
}) => {
  return (
    <STDContainer marginTop={marginTop}>
      {descriptionImgData.map(({ id, imgSrc }) => (
        <StoreMainDescription
          key={id}
          id={id}
          width={360}
          height={146}
          descriptionImgSrc={imgSrc}
          hoveredAt={hoveredAt}
          setHoveredAt={setHoveredAt}
          changeActiveModal={changeActiveModal}
        />
      ))}
    </STDContainer>
  );
};

const CONTAINER_SIZE = {
  width: 360,
  height: 1080,
};

const STDContainer = styled.div<IContainerProp>`
  ${({ marginTop }) => css`
    width: ${CONTAINER_SIZE.width * 0.4}px;
    height: ${CONTAINER_SIZE.height * 0.4}px;
    margin-top: ${marginTop * 0.4}px;

    @media ${device.laptopL} {
      width: ${CONTAINER_SIZE.width * 0.6}px;
      height: ${CONTAINER_SIZE.height * 0.6}px;
      margin-top: ${marginTop * 0.6}px;
    }

    @media ${device.desktopL} {
      width: ${CONTAINER_SIZE.width}px;
      height: ${CONTAINER_SIZE.height}px;
      margin-top: ${marginTop}px;
    }
  `}
`;
