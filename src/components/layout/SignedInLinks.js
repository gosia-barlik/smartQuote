import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
    <li ><NavLink to = '/' className ="indigo-text"><i class="material-icons left">search</i>Search</NavLink></li>
      <li ><NavLink to = '/create' className ="indigo-text"><i class="material-icons left">add_circle_outline</i>Add</NavLink></li>
      <li><NavLink to = '/' className ="indigo-text">Log Out</NavLink></li>
      <li><NavLink to = '/' className = 'btn btn-floating indigo '>MB</NavLink></li>
    </ul>
  );
};

export default SignedInLinks;
