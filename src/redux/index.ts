import { combineReducers } from "redux";
import imageReducer from "./image";

const rootReducer = combineReducers({
  imageReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
