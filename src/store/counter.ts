import assocPath from "ramda/es/assocPath";
import path from "ramda/es/path";
import { State } from "./state";

/**
 * Virtual path to any of the counters described by the state.
 */
export type CounterPath =
  | {
      kind: "top-level";
      counterId: string;
    }
  | {
      kind: "other-feature";
    };

export function topLevelCounter(counterId: string): CounterPath {
  return {
    kind: "top-level",
    counterId
  };
}

export function otherFeatureCounter(): CounterPath {
  return {
    kind: "other-feature"
  };
}

/** Generates the absolute object path to a counter in the state. */
export function objectPathFromCounterPath(counterPath: CounterPath): string[] {
  switch (counterPath.kind) {
    case "top-level":
      return ["counters", counterPath.counterId];
    case "other-feature":
      return ["nested", "otherFeature", "counter"];
    default:
      throw new Error();
  }
}

/**
 * Extracts a counter from a state based on its path.
 */
export function getCounter(
  counterPath: CounterPath,
  state: State
): CounterState {
  return path<CounterState>(objectPathFromCounterPath(counterPath), state)!;
}

/**
 * Updates a counter in a state based on its path.
 */
export function updateCounter(
  counterPath: CounterPath,
  counter: CounterState,
  state: State
): State {
  return assocPath<CounterState, State>(
    objectPathFromCounterPath(counterPath),
    counter,
    state
  );
}

export interface CounterState {
  readonly value: number;
}
