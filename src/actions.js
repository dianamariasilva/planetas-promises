import React, { Component } from 'react';
import { connect } from 'react-redux'
import createUser from 'path of createUser'
class userForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    let formInput = this.refs.createUserForm;
    this.props.createUser(formInput.value)
      .then((response) => {
        // Do something with the response... add more thens.. etc
      }, (error) => {
        // Do something with the error
      });
   }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder="current user" ref="createUserForm" />
        <button>Submit</button>
      </form>
    );
  }
}
export default connect(null, {
  createUser
})(userForm)
  