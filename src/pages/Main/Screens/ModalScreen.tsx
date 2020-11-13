import React from "react";
import styled from "styled-components";
import { ItemModal } from "components";
import { useDispatch } from "react-redux";
import { modalToggle } from "modules/store";
import { useGetActiveModal } from "hooks";

export const ModalScreen = () => {
  const activeModal = useGetActiveModal();
  const dispatch = useDispatch();

  return (
    <STDContainer>
      <STDemtpty onClick={() => dispatch(modalToggle(null))} />
      <ItemModal
        mapImgSrc={"/Images/leftMap.jpg"}
        leftTopImgSrc={"Images/leftTop.png"}
        roadImgSrc={"Images/tempRoad.png"}
        rightTopImgSrc={"Images/rightTopBack.png"}
        rightBottomImgSrc={"Images/rightBottomBack.png"}
        storeLogoScr={"Images/rightTopLogo.png"}
      />
    </STDContainer>
  );
};

const STDContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 10000;
`;

const STDemtpty = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
