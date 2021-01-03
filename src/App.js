import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import QuoteDetails from './components/quotes/QuoteDetails';
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import CreateQuote from "./components/quotes/CreateQuote";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path ='/' component = {Dashboard} />
          <Route path = '/quotes/:id' component = {QuoteDetails} />
          <Route path = '/login' component = {LogIn} />
          <Route path = '/signup' component = {SignUp}/>
          <Route path ='/create' component = {CreateQuote}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
