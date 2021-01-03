import React, { Component } from "react";

export default class CreateQuote extends Component {
  state = {
    author: "",
    title: "",
    cathegory: "",
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Write down a quote</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="cathegory">Cathegory</label>
            <input type="text" id="cathegory" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" cols="30" rows="10" onChange={this.handleChange} className="materialize-textarea"></textarea>
          </div>
          <div className="input-field">
            <button className="btn indigo lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
