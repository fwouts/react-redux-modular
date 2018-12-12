import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import Counter from "./Counter";
import logo from "./logo.svg";
import { Dispatch } from "./store/actions";
import { State } from "./store/state";

class App extends React.Component<{}> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter counterType={"mine"} />
          <Counter counterType={"theirs"} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
