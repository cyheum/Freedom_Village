import React from "react";
import styled from "styled-components";
import { ItemModal } from "components";
import { useDispatch } from "react-redux";
import { modalToggle } from "modules/store";
import { useGetActiveModal } from "hooks";
import mixin from "styles/mixin";

interface IData {
  iconSrc: string;
  description: string;
  textWidth: number;
  textHeight: number;
}

interface IProp {
  rightData: {
    rightTopData: IData[];
    rightBottomData: IData[];
  };
}

export const ModalScreen: React.FC<IProp> = ({ rightData }) => {
  const activeModal = useGetActiveModal();
  const dispatch = useDispatch();

  return (
    <STDContainer>
      <STDemtpty onClick={() => dispatch(modalToggle(null))} />
      <ItemModal
        mapImgSrc={"/Images/detailMap.png"}
        roadImgSrc={"/Images/streetLogo.png"}
        rightTopImgSrc={"/Images/storeImg3.png"}
        rightBottomImgSrc={"/Images/storeImg2.png"}
        storeLogoScr={"/Images/storeLogo.png"}
        emptyBlur={"/Images/emptyBlur.png"}
        rightTopData={rightData.rightTopData}
        rightBottomData={rightData.rightBottomData}
      />
    </STDContainer>
  );
};

const STDContainer = styled.div`
  position: fixed;
  top: 0;
  ${mixin.flexSet()};
  width: 100%;
  z-index: 10000;
`;

const STDemtpty = styled.div`
  width: 100%;
  height: 100vh;
`;
