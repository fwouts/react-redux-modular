import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, increaseCounter } from "./store/actions";
import { CounterState, CounterType, State } from "./store/state";

class Counter extends React.Component<{
  currentValue: number;
  increaseCounter(): void;
}> {
  public render() {
    return (
      <h1 onClick={this.props.increaseCounter}>{this.props.currentValue}</h1>
    );
  }
}

const mapStateToProps = (state: State, props: { counterType: CounterType }) =>
  scopedStateToProps(
    props.counterType === "mine" ? state.myCounter : state.theirCounter
  );

function scopedStateToProps(counterState: CounterState) {
  return {
    currentValue: counterState.value
  };
}

const mapDispatchToProps = (
  dispatch: Dispatch,
  props: { counterType: CounterType }
) => ({
  increaseCounter: () => dispatch(increaseCounter(props.counterType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
