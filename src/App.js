import React from "react";
import "./App.css";

// import SVG from "./components/SVG";

import Counter from "./components/Counter";
import Title from "./components/Title";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment(modifier) {
    this.setState({ count: this.state.count + modifier })
  }
  render() {
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
          {/* <SVG /> */}
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Counts in 1s */}
//         <Counter modifier={1} />

//         {/* Counts in 5s */}
//         <Counter modifier={5} />

//         {/* Counts in 3s */}
//         <Counter modifier={3} />
//         {/* <SVG /> */}
//       </header>
//     </div>
//   );
// }

export default App;
