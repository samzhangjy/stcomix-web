import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './views/Index'
import Navbar from './components/Navbar'
import Comics from './views/Comics'
import Comic from './views/Comic'
import Footer from './components/Footer'
import './styles/gridlex.min.css'
import './theme-change.min.js'

function App() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark")
  } else {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "light")
  }
  return (
    <Router>
      <Navbar />
      <Switch>
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
  );
}

export default App;
