import { combineReducers } from "redux";
import mainStore from "./store";

const rootReducer = combineReducers({
  mainStore,
});

export * from "./store.interface";
export * from "./store";

export default rootReducer;
