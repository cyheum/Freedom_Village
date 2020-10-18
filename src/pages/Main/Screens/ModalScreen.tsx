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
    <Container onClick={() => dispatch(modalToggle(null))}>
      <ItemModal activeModal={activeModal} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10000;
`;
