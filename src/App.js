import React from "react";
import "./App.css";
import Child1 from './components/Child1'
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent: Inside constructor");

    this.state = {
      count: 0,
			showChildComponent: true
    };
  }

  componentDidMount() {
    console.log("Parent: Inside componentDidMount");
  }

	componentDidUpdate() {
		console.log("Parent: Inside componentDidUpdate");
	}

  render() {
    console.log("Parent: Inside render");
    const { count, showChildComponent } = this.state;
    return (
      <>
        <h1>App</h1>
        <h2>{count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
				{showChildComponent && <Child1 />}
				<br/>
				<button onClick={() => this.setState({ showChildComponent: !showChildComponent })}>
          Show/Hide
        </button>
      </>
    );
  }
}

export default App;

/*
	render: Evaluation of JSX, updation of DOM with relevant HTML
	Component Lifecycle:
	3 phases:
	1. Mounting (Birth)
	2. Updating (Life events)
	3. Unmounting (Death)
	Component Lifecycle Methods:
	1. Mounting -> componentDidMount 
	Eg: API calls, initial values
	2. Updating -> componentDidUpdate
	Eg: track state changes, track props changes
	3. Unmounting -> componentWillUnmount
	Eg: Reset fields, data, etc
*/