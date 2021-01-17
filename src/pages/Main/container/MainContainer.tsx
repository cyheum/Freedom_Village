import React from 'react';
import { useGetActiveModal } from 'hooks';
import { MainScreen } from '../Screens/MainScreen';
import ModalContainer from './ModalContainer';
import { MAIN_DATA, RIGHTDATA } from 'utils/consts';

export const MainContainer = () => {
  const activeModal = useGetActiveModal();

  return (
    <>
      <MainScreen mainData={MAIN_DATA} />
      {activeModal !== null && <ModalContainer rightData={RIGHTDATA} />}
    </>
  );
};
