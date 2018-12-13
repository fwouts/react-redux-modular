# One approach to connect a React component to multiple Redux substores

## [Live demo on CodeSandbox](https://codesandbox.io/s/23rzny36nj)

Imagine for a second that you have a page, with multiple counters in it.

You have the following state in Redux:

```typescript
/**
 * Global state.
 */
export interface State {
  // We have a bunch of top-level counters, identified by a unique ID.
  counters: {
    [counterId: string]: CounterState;
  };
  nested: {
    // We also have another independent counter for a separate feature (called "my feature").
    myFeature: {
      counter: CounterState;
    };
  };
}

/**
 * Internal state of a counter.
 */
export interface CounterState {
  value: number;
}
```

Each counter starts at zero. It increases by one every time you update it.

You can reuse a React component to represent each counter. However, you cannot simply "connect" the component to the Redux store, because there are multiple counter states to choose from.

One way to address this, which we show here, is to introduce the concept of a `CounterPointer`, described below in TypeScript:

```typescript
export type CounterPointer =
  | {
      kind: "top-level";
      counterId: string;
    }
  | {
      kind: "my-feature";
    };
```

This means that you can now very specifically say which counter you're talking about.

You can then connect the `Counter` component to a `CounterState` by providing a single prop `counterPointer`.

For details, read through the [src](https://github.com/fwouts/react-redux-modular/tree/master/src) directory.
