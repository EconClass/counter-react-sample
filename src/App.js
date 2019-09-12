import React from "react";
import "./App.css";

// import SVG from "./components/SVG";

import Counter from "./components/Counter";
import Title from "./components/Title";
import Factory from "./components/Factory";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment(modifier) {
    this.setState({ count: this.state.count + modifier })
  }
  render() {
    let factory;
    if (this.state.count > 10) {
      factory = <Factory />
    } else {
      factory = null;
    }
    return (
      <div className="App">
        <header className="App-header">
          <Title text={this.state.count} />
          {/* Counts in 1s */}
          <Counter modifier={1} onClick={() => { this.increment(1) }} />

          {/* Counts in 5s */}
          <Counter modifier={5} onClick={() => { this.increment(5) }} />

          {/* Counts in 3s */}
          <Counter modifier={3} onClick={() => { this.increment(3) }} />
          {factory}
          {/* <SVG /> */}

        </header>
      </div>
    );
  }
}

export default App;
