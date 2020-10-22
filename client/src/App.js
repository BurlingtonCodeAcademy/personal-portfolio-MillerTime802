//importing React and React router
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing all components
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Hobbies from "./components/Hobbies";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
export default function App() {
  //Bringing in all components
  return (
    <Router>
      <NavBar />
      <div className="wrapper">
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="App">
              <h1 className="h1">
                {" "}
                Welcome to the world's worst portfolio page!
              </h1>
              <h3 className="h3">
                A hard working web developer ready to make a positive impact
              </h3>
              <img
                className="center"
                src="/images/homepic.jpg"
                alt="pic of me"
                width="400"
                height="533"
              />
            </div>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
