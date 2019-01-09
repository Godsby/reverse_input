/*
WARM UP!! Create a component that renders a text input. When the user inputs text, it should render that text *reversed* below the input.
*/

import React from 'react';

class WarmUp extends React.Component {
  constructor () {
    super();
    this.state = {
      data: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: event.target.value
    })
  }

  render () {
    return(
      <>
        Type your input here:
        <input onChange={this.handleChange} type='text' value={this.state.data}/>
        <p>{this.state.data.split('').reverse().join('')}</p>
      </>
    )
  }
}

export default WarmUp;