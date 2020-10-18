import React from "react";
import styled from "styled-components";

interface IProps {
  activeModal: string | null;
}

export const ItemModal: React.FC<IProps> = ({ activeModal }) => {
  return (
    <Modal onClick={(e) => e.stopPropagation()}>I m modal{activeModal}!</Modal>
  );
};

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 60vh;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.1);
  background: white;
`;
