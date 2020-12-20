import React from 'react';
import styled, { css } from 'styled-components';
import { device } from 'styles/theme';
import { IStoreData } from 'modules';
import StoreMainDescription from '../atomic/StoreMainDescription';

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

const RATIO = { tablet: 0.5, laptop: 0.7 };

const STDContainer = styled.div<IContainerProp>`
  ${({ marginTop }) => css`
    width: ${CONTAINER_SIZE.width * RATIO.tablet}px;
    margin-top: ${marginTop * RATIO.tablet}px;

    @media ${device.laptopL} {
      width: ${CONTAINER_SIZE.width * RATIO.laptop}px;
      margin-top: ${marginTop * RATIO.laptop}px;
    }

    @media ${device.desktopL} {
      width: ${CONTAINER_SIZE.width}px;
      margin-top: ${marginTop}px;
    }
  `}
`;
