import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
      email:"",
      password:"",
      firstName: "",
      lastName: "",
  };

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
  };

  handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value})
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="grey lighten-3">
          <h5 className="indigo-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id= "email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id= "password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id= "firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id= "lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn indigo lighten-2">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}