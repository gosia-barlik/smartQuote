import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper z-depth-0 grey lighten-3">
      <div className="container">
        <Link to='/' className="brand-logo indigo-text text-darken-3 ">
          smartQuotes
        </Link>
        <SignedInLinks/>
        <SignedOutLinks/>
      </div>
    </nav>
  );
};

export default Navbar;