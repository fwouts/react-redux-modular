import { Action } from "./actions";
import { CounterState, State } from "./state";

export const rootReducer = (
  state: State = {
    myCounter: {
      value: 0
    },
    theirCounter: {
      value: 0
    }
  },
  action: Action
): State => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      switch (action.counterType) {
        case "mine":
          return {
            ...state,
            myCounter: increaseCounter(state.myCounter)
          };
        case "theirs":
          return {
            ...state,
            theirCounter: increaseCounter(state.theirCounter)
          };
      }
  }
  return state;
};

function increaseCounter(counterState: CounterState): CounterState {
  return {
    value: counterState.value + 1
  };
}
