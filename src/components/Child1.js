import React, { Component } from 'react'

export class Child1 extends Component {
	componentDidMount() {
		console.log("Child: Inside componentDidMount");
	}

	componentWillUnmount() {
		console.log("Child: Inside componentWillUnmount");
	}

	render() {
		return (
			<h1>Child1</h1>
		)
	}
}

export default Child1