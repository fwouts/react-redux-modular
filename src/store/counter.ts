import assocPath from "ramda/es/assocPath";
import path from "ramda/es/path";
import { State } from "./state";

/**
 * Virtual path to any of the counters described by the state.
 */
export type CounterPointer =
  | {
      kind: "top-level";
      counterId: string;
    }
  | {
      kind: "my-feature";
    };

/**
 * Returns a {@link CounterPointer} for a top-level counter from its ID.
 */
export function topLevelCounter(counterId: string): CounterPointer {
  return {
    kind: "top-level",
    counterId
  };
}

/**
 * Returns a {@link CounterPointer} for the counter of "my feature".
 */
export function myFeatureCounter(): CounterPointer {
  return {
    kind: "my-feature"
  };
}

/** Generates the absolute object path to a counter in the state. */
export function objectPathFromCounterPointer(
  counterPointer: CounterPointer
): string[] {
  switch (counterPointer.kind) {
    case "top-level":
      return ["counters", counterPointer.counterId];
    case "my-feature":
      return ["nested", "myFeature", "counter"];
    default:
      throw new Error();
  }
}

/**
 * Extracts a counter from a state based on its path.
 */
export function getCounter(
  counterPointer: CounterPointer,
  state: State
): CounterState {
  return path<CounterState>(
    objectPathFromCounterPointer(counterPointer),
    state
  )!;
}

/**
 * Updates a counter in a state based on its path.
 */
export function updateCounter(
  counterPointer: CounterPointer,
  counter: CounterState,
  state: State
): State {
  return assocPath<CounterState, State>(
    objectPathFromCounterPointer(counterPointer),
    counter,
    state
  );
}

/**
 * Internal state of a counter.
 */
export interface CounterState {
  readonly value: number;
}
