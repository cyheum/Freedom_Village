import { GetData, ModalToggle, IStoreData } from "./store.interface";

export const GET_DATA = "GET_DATA";
export const MODAL_TOGGLE = "MODAL_TOGGLE";

type contentAction = GetData | ModalToggle;

export const getData = (data: IStoreData) => ({
  type: GET_DATA,
  payload: data,
});

export const modalToggle = (id: string | null) => ({
  type: MODAL_TOGGLE,
  payload: id,
});

const INITIAL_STATE = {
  currentData: [],
  activeModal: null,
};

export default function mainStore(
  state = INITIAL_STATE,
  action: contentAction
) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        currentData: action.payload,
      };
    case MODAL_TOGGLE:
      return {
        ...state,
        activeModal: action.payload,
      };
    default:
      return state;
  }
}
