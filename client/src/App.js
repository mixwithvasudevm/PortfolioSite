import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Header, Footer } from "./components";
import { Blogs, Home, Add, Aemp, Students, SignIn, Contact, Faq } from "./views";
import BlogPage from "./views/BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/aemp" exact component={Aemp} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/add" exact component={Add} />
          <Route path="/blogs/:id" exact component={BlogPage} />
          <Route path="/auth" exact component={SignIn} />
          <Route path="/students" exact component={Students} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/faq" exact component={Faq} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
