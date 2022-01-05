import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  NavLink
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
