import {
  IFetchUsersDataAction,
  IUserData,
  IClearDataAcation,
} from "../actions/data";
import { ActionTypes } from "../types";

const dataReducer = (
  state: IUserData[] = [],
  action: IFetchUsersDataAction | IClearDataAcation
) => {
  switch (action.type) {
    case ActionTypes.GET_DATA:
      return action.payload;

    case ActionTypes.CLEAR_DATA:
      return [];

    default:
      return state;
  }
};

export { dataReducer };
