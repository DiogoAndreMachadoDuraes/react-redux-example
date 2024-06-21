import { action, EmptyAction } from "typesafe-actions";
import { Actions } from "./types";

/** Action to change value store */
export const changeValue = (value: string): EmptyAction<string> =>
  action(Actions.CHANGED_VALUE, value);

/** Action to delete value store */
export const deleteValue = (): EmptyAction<string> =>
  action(Actions.DELETED_VALUE);
