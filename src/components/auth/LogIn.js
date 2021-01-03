import React, { Component } from "react";

export default class LogIn extends Component {
  state = {
      email:"",
      password:""
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
          <h5 className="indigo-text text-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input className="styledInput" type="email" id= "email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input className="styledInput" type="password" id= "password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn indigo darken-3">Login</button>
          </div>
          <p className="indigo-text text-lighten-3 styledP">FORGOT PASSWORD?</p>
        </form>
      </div>
    );
  }
}
