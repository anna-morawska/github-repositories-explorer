import { ILoadingUsersAction, TLoading } from "../actions/loading";
import { ActionTypes } from "../types";

const loadingReducer = (
  state: TLoading = false,
  action: ILoadingUsersAction
) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return action.payload;

    default:
      return state;
  }
};

export { loadingReducer };
