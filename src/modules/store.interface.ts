import { GET_DATA, MODAL_TOGGLE } from "./store";

export interface IStoreState {
  data: any;
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
