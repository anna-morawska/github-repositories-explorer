import { IStatusAction } from "../actions/status";
import { ActionTypes } from "../types";
import { MessageType } from "../../components";

const initialState = {
  status: null,
  message: null
};

export interface IStatusReducer {
  status: MessageType | null;
  message: string | null;
}

export const statusReducer = (
  state: IStatusReducer = initialState,
  action: IStatusAction
) => {
  switch (action.type) {
    case ActionTypes.STATUS:
      return {
        status: action.status,
        message: action.message
      };

    default:
      return state;
  }
};
