import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Searchpage from './pages/Searchpage';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path="/search">
            <Searchpage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
