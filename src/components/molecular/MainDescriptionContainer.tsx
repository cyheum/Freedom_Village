import React from "react";
import styled, { css } from "styled-components";
import { device } from "styles/theme";
import { IStoreData } from "modules";
import StoreMainDescription from "../atomic/StoreMainDescription";

interface IContainerProp {
  marginTop: number;
}

interface IProp extends IContainerProp {
  currentStoreData: IStoreData[];
  changeActiveModal: (id: string | null) => void;
  onClickSetCurrentStoreData: (data: IStoreData) => void;
}

export const MainDescriptionContainer: React.FC<IProp> = ({
  marginTop,
  currentStoreData,
  changeActiveModal,
  onClickSetCurrentStoreData,
}) => {
  return (
    <STDContainer marginTop={marginTop}>
      {currentStoreData.map((storeData) => {
        const { id, imgSrc } = storeData;

        return (
          <StoreMainDescription
            key={id}
            id={id}
            width={360}
            height={146}
            descriptionImgSrc={imgSrc}
            changeActiveModal={changeActiveModal}
            onClickSetData={() => onClickSetCurrentStoreData(storeData)}
          />
        );
      })}
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
