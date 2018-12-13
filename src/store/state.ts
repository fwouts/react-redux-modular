import { CounterState } from "./counter";

export interface State {
  // We have a bunch of top-level counters, identified by a unique ID.
  readonly counters: {
    readonly [counterId: string]: CounterState;
  };
  readonly nested: {
    // We also have another independent counter for a separate feature (called "other").
    otherFeature: {
      counter: CounterState;
    };
  };
}
