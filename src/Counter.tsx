import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, increaseCounter } from "./store/actions";
import { State } from "./store/state";

class Counter extends React.Component<{
  currentValue: number;
  increaseCounter(): void;
}> {
  public render() {
    return <h1 onClick={this.props.increaseCounter}>{this.props.currentValue}</h1>;
  }
}

const mapStateToProps = (state: State) => ({
  currentValue: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increaseCounter: () => dispatch(increaseCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
