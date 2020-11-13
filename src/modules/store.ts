import { GetData, ModalToggle, IStoreState } from "./store.interface";

export const GET_DATA = "GET_DATA";
export const MODAL_TOGGLE = "MODAL_TOGGLE";

type contentAction = GetData | ModalToggle;

export const getData = (data: IStoreState) => ({
  type: GET_DATA,
  payload: data,
});

export const modalToggle = (id: string | null) => ({
  type: MODAL_TOGGLE,
  payload: id,
});

const INITIAL_STATE = {
  data: [],
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
        data: action.payload,
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
