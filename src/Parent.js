import React from 'react';
import Form from './Form'
import Display from './Display'

class Parent extends React.Component {

  state = {
    firstName: "Ze",
    lastName: "Ninguem",
    emotes: []
  }

  // Event Handler Functions

  changeFirstName = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  changeLastName = event => {
    this.setState({
      lastName: event.target.value
    })
  }



  render() {
    return (
      <div>
        <Form
          formData={this.state}
          changeFirstName={this.changeFirstName}
          changeLastName={this.changeLastName}
        />
        <Display
          formData={this.state}
        />
      </div>
    )
  }

}

export default Parent;