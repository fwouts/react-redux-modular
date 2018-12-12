import { Action } from "./actions";
import { CounterState, State } from "./state";

export const rootReducer = (
  state: State = {
    counters: {
      mine: {
        value: 0
      },
      theirs: {
        value: 0
      }
    }
  },
  action: Action
): State => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counters: {
          ...state.counters,
          [action.counterId]: increaseCounter(state.counters[action.counterId])
        }
      };
  }
  return state;
};

function increaseCounter(counterState: CounterState): CounterState {
  return {
    value: counterState.value + 1
  };
}
