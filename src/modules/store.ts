const GET_DATA = "GET_DATA";

interface DataType {
  data: any;
}

interface GetData {
  type: typeof GET_DATA;
  payload: DataType[];
}

type contentAction = GetData;

export const getData = (data: DataType) => ({
  type: GET_DATA,
  payload: data,
});

const INITIAL_STATE = {
  data: [],
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
    default:
      return state;
  }
}
