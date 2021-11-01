import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Header, Footer } from "./components";
import { Blogs, Home, Add, Aemp, Students, SignIn , AboutPageView } from "./views";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aemp" exact component={Aemp} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/add" exact component={Add} />
          <Route path="/auth" exact component={SignIn} />
          <Route path="/students" exact component={Students} />
          <Route path="/about" exact component={AboutPageView} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
