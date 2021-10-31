import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Header, Footer } from "./components";
import { Blogs, Home ,Add, Aemp } from "./views";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={Home} />
=======
          <Route path="/home" exact component={Home} />
          <Route path="/aemp" exact component={Aemp} />
>>>>>>> 3b3f20e2500551ff26fc05d9f25d88c4a37ea390
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/add" exact component={Add} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
