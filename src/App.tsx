import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import logo from "./logo.svg";
import { Dispatch, increaseCounter } from "./store/actions";
import { State } from "./store/state";

class App extends React.Component<{
  currentValue: number;
  increaseCounter(): void;
}> {
  public render() {
    return (
      <div className="App" onClick={this.props.increaseCounter}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.currentValue}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
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
)(App);
