import { GET_DATA, MODAL_TOGGLE } from './store';

export interface ILinks {
  top: string[];
  bottom: string[];
}

export interface IStoreData {
  id: string;
  type: string;
  imgSrc: string;
  label: string;
  rightTopImgSrc: string;
  rightBottomImgSrc: string;
  positionX: number;
  positionY: number;
  links: ILinks;
}

export interface IStoreState {
  currentData: IStoreData;
  activeModal: string | null;
}

export interface IStore {
  mainStore: IStoreState;
}

export interface GetData {
  type: typeof GET_DATA;
  payload: any[];
}

export interface ModalToggle {
  type: typeof MODAL_TOGGLE;
  payload: string | null;
}
