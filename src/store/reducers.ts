import { Action } from "./actions";
import { State } from "./state";

export const rootReducer = (
  state: State = {
    counter: 0
  },
  action: Action
): State => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
