import React from "react";
import styled, { css } from "styled-components";
import mixin from "styles/mixin";

interface IContainer {
  id: string;
  width: number;
  height: number;
}

interface IProp extends IContainer {
  descriptionImgSrc: string;
  changeActiveModal: (id: string | null) => void;
  onClickSetData: () => void;
}

const StoreMainDescription: React.FC<IProp> = ({
  id,
  width,
  height,
  descriptionImgSrc,
  changeActiveModal,
  onClickSetData,
}) => {
  return (
    <STDContainer
      id={id}
      width={width}
      height={height}
      onClick={() => {
        changeActiveModal(id);
        onClickSetData();
      }}
    >
      <img alt="storeDescription_image" src={descriptionImgSrc} />
    </STDContainer>
  );
};

export default StoreMainDescription;

const STDContainer = styled.div<IContainer>`
  ${({ width, height, id }) => css`
    cursor: pointer;
    transition: opacity 500;
    ${mixin.dynamicScreen(width, height)}
  `}

  &:hover {
    opacity: 0.5;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
