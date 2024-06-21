import { Actions, ExampleAction, ExampleState } from "./types";

/** Initial state of the example store */
export const exampleInitialState = { value: "" };

/** Reducer of the example store */
export const exampleReducer = (
  state = exampleInitialState,
  action: ExampleAction
): ExampleState => {
  switch (action.type) {
    case Actions.CHANGED_VALUE: {
      return { value: action.payload };
    }
    case Actions.DELETED_VALUE: {
      return { value: "" };
    }
    default:
      return state;
  }
};
