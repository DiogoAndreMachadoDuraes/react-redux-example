/** Type of actions on reducer */
export enum Actions {
  CHANGED_VALUE = "CHANGED_VALUE",
  DELETED_VALUE = "DELETED_VALUE",
}

/** Type of example store */
export interface ExampleState {
  value: string;
}

/** Type reducer actions */
export interface ExampleAction {
  type: Actions;
  payload: string;
}
