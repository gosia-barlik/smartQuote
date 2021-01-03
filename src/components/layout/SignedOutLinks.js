import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li ><NavLink to = '/signup' className ="indigo-text">Sign Up</NavLink></li>
      <li><NavLink to = '/login' className ="indigo-text">Log In</NavLink></li>
    </ul>
  );
};

export default SignedOutLinks;