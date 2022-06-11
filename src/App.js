import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './components/Destination/Destination';

function App() {
  return (
    <div className="backgroundImage">
     <Header></Header>
     

     <Router>
     <Switch>
      <Route path="/login"> 
      <Login></Login>
      </Route>
      <Route path="/destination">
        <Destination></Destination>
      </Route>
      <Route path="/home"> 
      <Home></Home>
      </Route>
    </Switch>
     </Router>
   
    </div>
  );
}

export default App;