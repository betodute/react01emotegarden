import React from 'react';
import Form from './Form'
import Display from './Display'

class Parent extends React.Component {

  state = {
    firstName: "Ze",
    lastName: "Ninguem",
    emotes: []
  }

  render() {
    return (
      <div>
        <Form/>
        <Display/>
      </div>
    )
  }

}

export default Parent;