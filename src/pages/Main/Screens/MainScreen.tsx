import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getData, modalToggle, IStoreData } from "modules";
import mixin from "styles/mixin";
import { MainDescriptionContainer } from "components";

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
  background: no-repeat center/cover url("/Images/mainMap.jpg");
  ${mixin.dynamicScreen(MAP_LENGTH.width, MAP_LENGTH.height, [0, 46, 0, 46])};
`;
