import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, increaseCounter } from "./store/actions";
import { CounterPointer, CounterState, getCounter } from "./store/counter";
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

const mapStateToProps = (
  state: State,
  props: { counterPointer: CounterPointer }
) => scopedStateToProps(getCounter(props.counterPointer, state));

function scopedStateToProps(counterState: CounterState) {
  return {
    currentValue: counterState.value
  };
}

const mapDispatchToProps = (
  dispatch: Dispatch,
  props: { counterPointer: CounterPointer }
) => ({
  increaseCounter: () => dispatch(increaseCounter(props.counterPointer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
