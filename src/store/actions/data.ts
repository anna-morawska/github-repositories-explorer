import { Dispatch } from "redux";
import { api } from "../../utils/utils";
import { ActionTypes } from "../types";
import { MessageType } from "../../components";
import { IStatusAction, statusAction } from "./status";
import { loadingUsersAction, ILoadingUsersAction } from "./loading";

export interface IUserData {
  login: string;
  repos: IRepoData[];
}

export interface IUsersData {
  items: IUserData[];
}

export interface IRepoData {
  name: string;
  description: string;
  stargazers_count: number;
}

export interface IFetchUsersDataAction {
  type: ActionTypes.GET_DATA;
  payload: IUserData[];
}

export interface IClearDataAcation {
  type: ActionTypes.CLEAR_DATA;
}

const mergeData = (
  usersResponse: IUsersData,
  userReposResponse: IRepoData[][]
) => {
  return usersResponse.items.map((user, index) => ({
    login: user.login,
    repos: userReposResponse[index],
  }));
};

export const clearData = (): IClearDataAcation => ({
  type: ActionTypes.CLEAR_DATA,
});

export const fetchUsersData = (payload: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch<ILoadingUsersAction>(loadingUsersAction(true));

    const GET_USERS_URL = `https://api.github.com/search/users?q=${payload}+in:login&page=1&per_page=5`;
    const usersResponse = await api<IUsersData>(GET_USERS_URL);

    if (usersResponse.items.length === 0) {
      dispatch<IStatusAction>(
        statusAction(
          `Sorry, we couldn't find any results matching "${payload}"`,
          MessageType.WARNING
        )
      );
      dispatch<ILoadingUsersAction>(loadingUsersAction(false));

      return;
    }

    const userReposResponse = await Promise.all(
      usersResponse.items.map((user) =>
        api<IRepoData[]>(`https://api.github.com/users/${user.login}/repos`)
      )
    );

    const data = mergeData(usersResponse, userReposResponse);

    dispatch<IFetchUsersDataAction>({
      type: ActionTypes.GET_DATA,
      payload: data,
    });

    dispatch<IStatusAction>(
      statusAction(`Showing users for "${payload}"`, MessageType.INFO)
    );
    dispatch<ILoadingUsersAction>(loadingUsersAction(false));
  } catch (error) {
    dispatch<IStatusAction>(
      statusAction(
        `Ups, something went wrong, try again later`,
        MessageType.ERROR
      )
    );
    dispatch<ILoadingUsersAction>(loadingUsersAction(false));
  }
};
