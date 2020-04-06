import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import { statusReducer, IStatusReducer } from "./status";
import { dataReducer } from "./data";
import { IUserData } from "../actions/data";

export interface IStore {
  loading: boolean;
  status: IStatusReducer;
  users: IUserData[];
}

const rootReducer = combineReducers<IStore>({
  loading: loadingReducer,
  status: statusReducer,
  users: dataReducer
});

export { rootReducer };
