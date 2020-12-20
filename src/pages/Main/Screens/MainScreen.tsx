import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getData, modalToggle, IStoreData } from 'modules';
import mixin from 'styles/mixin';
import { MainDescriptionContainer } from 'components';
import { device } from 'styles/theme';

interface IData {
  marginTop: number;
  storeData: IStoreData[];
}

interface IProp {
  mainData: IData[];
}

export const MainScreen: React.FC<IProp> = ({ mainData }) => {
  const dispatch = useDispatch();

  const changeActiveModal = (id: string | null) => {
    dispatch(modalToggle(id));
  };

  const onClickSetCurrentStoreData = (data: IStoreData) => {
    dispatch(getData(data));
  };

  return (
    <STDContainer>
      <STDMapContainer>
        {mainData.map(({ marginTop, storeData }, index) => (
          <MainDescriptionContainer
            key={index}
            marginTop={marginTop}
            currentStoreData={storeData}
            changeActiveModal={changeActiveModal}
            onClickSetCurrentStoreData={onClickSetCurrentStoreData}
          />
        ))}
        <STDCopyright>ⓒ Yeheum Choi</STDCopyright>
      </STDMapContainer>
    </STDContainer>
  );
};

const MAP_LENGTH = {
  width: 1920,
  height: 1080,
};

const RATIO = { laptop: 0.7, tablet: 0.5 };

const STDContainer = styled.div`
  ${mixin.flexSet()}
  height: 100vh;
  width: 100%;
`;

const STDMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background: no-repeat center/cover url('/Images/mainMap.jpg');
  ${mixin.dynamicScreen(MAP_LENGTH.width, MAP_LENGTH.height, [0, 46, 0, 46])};
`;

const STDCopyright = styled.div`
  position: absolute;
  bottom: ${110 * RATIO.tablet}px;
  right: 0;
  padding-right: ${50 * RATIO.tablet}px;
  font-size: 10px;
  font-weight: 300;

  @media ${device.laptopL} {
    bottom: ${110 * RATIO.laptop}px;
    padding-right: ${50 * RATIO.laptop}px;
    font-size: 12px;
  }

  @media ${device.desktopL} {
    bottom: 110px;
    padding-right: 50px;
  }
`;
