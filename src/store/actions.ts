import { Dispatch as ReduxDispatch } from "redux";
import { CounterPointer } from "./counter";

export type Dispatch = ReduxDispatch<Action>;

export type Action = IncreaseCounterAction;

/**
 * An action that increases a counter, identified by its path.
 */
export interface IncreaseCounterAction {
  type: "INCREASE_COUNTER";
  counterPointer: CounterPointer;
}

/**
 * Generates an action to increase a counter.
 */
export function increaseCounter(
  counterPointer: CounterPointer
): IncreaseCounterAction {
  return {
    type: "INCREASE_COUNTER",
    counterPointer
  };
}
