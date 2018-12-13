import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, increaseCounter } from "./store/actions";
import { CounterPath, CounterState, getCounter } from "./store/counter";
import { State } from "./store/state";

class Counter extends React.Component<{
  label: string;
  currentValue: number;
  increaseCounter(): void;
}> {
  public render() {
    return (
      <h1 onClick={this.props.increaseCounter}>
        {this.props.label} {this.props.currentValue}
      </h1>
    );
  }
}

const mapStateToProps = (state: State, props: { counterPath: CounterPath }) =>
  scopedStateToProps(getCounter(props.counterPath, state));

function scopedStateToProps(counterState: CounterState) {
  return {
    currentValue: counterState.value
  };
}

const mapDispatchToProps = (
  dispatch: Dispatch,
  props: { counterPath: CounterPath }
) => ({
  increaseCounter: () => dispatch(increaseCounter(props.counterPath))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
