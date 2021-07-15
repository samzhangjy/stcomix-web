import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./views/Index";
import Navbar from "./components/Navbar";
import Comics from "./views/Comics";
import Comic from "./views/Comic";
import Footer from "./components/Footer";
import Blogs from "./views/Blogs";
import Blog from "./views/Blog";
import "./styles/gridlex.min.css";
import "./styles/index.css"
import "./theme-change.min.js";

function App() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
  } else {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "light");
  }
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/blog/:blogName">
            <Blog />
          </Route>
          <Route path="/blog">
            <Blogs />
          </Route>
          <Route path="/comic/:bookId">
            <Comic />
          </Route>
          <Route path="/comic">
            <Comics />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
