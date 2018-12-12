import { Dispatch as ReduxDispatch } from "redux";
import { CounterType } from "./state";

export type Dispatch = ReduxDispatch<Action>;

export type Action = IncreaseCounterAction;

export interface IncreaseCounterAction {
  type: "INCREASE_COUNTER";
  counterType: CounterType;
}

export function increaseCounter(
  counterType: CounterType
): IncreaseCounterAction {
  return {
    type: "INCREASE_COUNTER",
    counterType
  };
}
