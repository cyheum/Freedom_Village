import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { modalToggle } from "modules/store";
import { device } from "styles/theme";
import mixin from "styles/mixin";
import { MainDescriptionContainer } from "components";

interface IDescriptionData {
  id: string;
  imgSrc: string;
}

interface IData {
  marginTop: number;
  descriptionImgData: IDescriptionData[];
}

interface IProp {
  mainData: IData[];
  hoveredAt: string | null;
  setHoveredAt: (id: string | null) => void;
}

export const MainScreen: React.FC<IProp> = ({
  mainData,
  hoveredAt,
  setHoveredAt,
}) => {
  const dispatch = useDispatch();

  const changeActiveModal = (id: string | null) => {
    dispatch(modalToggle(id));
  };

  return (
    <STDContainer>
      <STDMapContainer>
        {mainData.map(({ marginTop, descriptionImgData }, index) => (
          <MainDescriptionContainer
            key={index}
            hoveredAt={hoveredAt}
            marginTop={marginTop}
            descriptionImgData={descriptionImgData}
            changeActiveModal={changeActiveModal}
            setHoveredAt={setHoveredAt}
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
  padding-left: ${46 * 0.4}px;
  padding-right: ${46 * 0.4}px;
  background-image: url("/Images/mainMap.jpg");
  background-size: cover;
  background-position: center;

  @media ${device.laptopL} {
    width: ${MAP_LENGTH.width * 0.6}px;
    height: ${MAP_LENGTH.height * 0.6}px;
    padding-left: ${46 * 0.6}px;
    padding-right: ${46 * 0.6}px;
  }

  @media ${device.desktopL} {
    width: ${MAP_LENGTH.width}px;
    height: ${MAP_LENGTH.height}px;
    padding-left: 46px;
    padding-right: 46px;
  }
`;
