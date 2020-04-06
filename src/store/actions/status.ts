import { ActionTypes } from "../types";
import { MessageType } from "../../components";

export interface IStatusAction {
  type: ActionTypes.STATUS;
  message: string | null;
  status: MessageType | null;
}

export const statusAction = (
  message: string | null,
  status: MessageType | null
): IStatusAction => ({
  type: ActionTypes.STATUS,
  message,
  status,
});
