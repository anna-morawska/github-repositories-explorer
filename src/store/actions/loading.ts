import { ActionTypes } from "../types";

export type TLoading = boolean;

export interface ILoadingUsersAction {
  type: ActionTypes.LOADING;
  payload: TLoading;
}

export const loadingUsersAction = (loading: boolean): ILoadingUsersAction => ({
  type: ActionTypes.LOADING,
  payload: loading,
});
