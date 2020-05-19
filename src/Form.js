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
            <select>
              <option value="plant01"> 🌵</option>
              <option value="plant02"> 🌲 </option>
              <option value="plant03"> 🌳 </option>
              <option value="plant04"> 🌴 </option>
              <option value="plant05"> 🌱 </option>
              <option value="plant06"> 🌿 </option>
              <option value="plant07"> 🌾 </option>
              <option value="plant08"> 🌻 </option>
              <option value="plant09"> 🌺 </option>
              <option value="plant10"> 🍁 </option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default Form;