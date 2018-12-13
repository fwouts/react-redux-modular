import { Dispatch as ReduxDispatch } from "redux";
import { CounterPath } from "./counter";

export type Dispatch = ReduxDispatch<Action>;

export type Action = IncreaseCounterAction;

export interface IncreaseCounterAction {
  type: "INCREASE_COUNTER";
  counterPath: CounterPath;
}

export function increaseCounter(
  counterPath: CounterPath
): IncreaseCounterAction {
  return {
    type: "INCREASE_COUNTER",
    counterPath
  };
}
