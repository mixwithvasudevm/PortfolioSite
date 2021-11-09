import "./App.css";
import React  from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Header, Footer } from "./components";
import BlogPage from "./views/BlogPage";
import * as api from "./api";
import { Blogs, Home, Add, Aemp, Students, SignIn , AboutPageView ,Contact, Faq,YouTube} from "./views";

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
          <Route path="/admin/auth" exact component={SignIn} />
          <Route path="/students" exact component={Students} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/youtube" exact component={YouTube} />
          <Route path="/about" exact component={AboutPageView} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
