import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, increaseCounter } from "./store/actions";
import { CounterState, State } from "./store/state";

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

const mapStateToProps = (state: State, props: { counterId: string }) =>
  scopedStateToProps(state.counters[props.counterId]);

function scopedStateToProps(counterState: CounterState) {
  return {
    currentValue: counterState.value
  };
}

const mapDispatchToProps = (
  dispatch: Dispatch,
  props: { counterId: string }
) => ({
  increaseCounter: () => dispatch(increaseCounter(props.counterId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
