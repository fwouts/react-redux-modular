export interface State {
  counters: {
    readonly [key: string]: CounterState;
  };
}

export interface CounterState {
  readonly value: number;
}
