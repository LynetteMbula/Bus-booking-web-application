import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
//importing a lirary to allow routing . Routing is  is the ability to move between different parts of an application when a user enters a URL or clicks an element ==> npm install react-router-dom to install the library  React-Dom works like a navigation system inside the project to navigate from one page to another.
//if npm install react-router-dom does not workon vs code try closing vscode and running it in cmd

//import logo from './logo.svg';
import "./App.css";

import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
import Payment from "./components/Payment";
import Contact from "./Pages/contact";

function App() {
  return (
    <div className="wrapper">
      {/* the components for the routes should be enclosed in <section> tag */}
      <Header />
      
      <Switch>
        <Route exact path="/"><Form/></Route>
        <Route exact path="/contact"></Route>
        <Route path="/makepayment"><Payment /></Route>
      </Switch>
      <article>
      <Footer/>
      </article>
    </div>
  );
}

export default App;
