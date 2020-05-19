import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            First Name:
            <input
              type="text"
              onChange={event => this.props.changeFirstName(event)}
              value={this.props.formData.firstName}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              onChange={event => this.props.changeLastName(event)}
              value={this.props.formData.lastName}
            />
          </label>
          <label>
            Plants:
            <select></select>
          </label>
        </form>
      </div>
    )
  }
}

export default Form;