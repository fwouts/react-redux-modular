import { Action } from "./actions";
import { CounterState, getCounter, updateCounter } from "./counter";
import { State } from "./state";

export const rootReducer = (
  state: State = {
    counters: {
      mine: {
        value: 0
      },
      theirs: {
        value: 0
      }
    },
    nested: {
      myFeature: {
        counter: {
          value: 0
        }
      }
    }
  },
  action: Action
): State => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return updateCounter(
        action.counterPath,
        increaseCounter(getCounter(action.counterPath, state)),
        state
      );
  }
  return state;
};

function increaseCounter(counterState: CounterState): CounterState {
  return {
    value: counterState.value + 1
  };
}
