export interface State {
  readonly counters: {
    readonly [key: string]: CounterState;
  };
}

export interface CounterState {
  readonly value: number;
}
