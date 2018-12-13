import { CounterState } from "./counter";

export interface State {
  readonly counters: {
    readonly [counterId: string]: CounterState;
  };
  readonly nested: {
    otherFeature: {
      counter: CounterState;
    };
  };
}
