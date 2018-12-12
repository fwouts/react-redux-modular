export interface State {
  readonly myCounter: CounterState;
  readonly theirCounter: CounterState;
}

export type CounterType = "mine" | "theirs";

export interface CounterState {
  readonly value: number;
}
