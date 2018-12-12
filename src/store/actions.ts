import { Dispatch as ReduxDispatch } from "redux";

export type Dispatch = ReduxDispatch<Action>;

export type Action = IncreaseCounterAction;

export interface IncreaseCounterAction {
  type: "INCREASE_COUNTER";
  counterId: string;
}

export function increaseCounter(counterId: string): IncreaseCounterAction {
  return {
    type: "INCREASE_COUNTER",
    counterId
  };
}
