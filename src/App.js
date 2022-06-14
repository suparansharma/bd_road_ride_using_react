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
import Nomatch from './components/Nomatch/Nomatch';
import data from './Data/Data.json';
import { useState } from 'react';

function App() {

  
  const [rider, setRider] = useState([])
  const handleRider = (ride) => {
      setRider(ride)
    }
  return (
    <div >
     
     

     <Router>
     <Switch>
     <Route exact path="/"> 
     <Header></Header>
      <Home></Home>
      </Route>

      <Route exact path="/home"> 
      <Header></Header>
      <Home  handleRider={handleRider}></Home>
      </Route>
      <Route path="/login"> 
      <Header></Header>
      <Login></Login>
      </Route>
      <Route path="/destination">
      <Header></Header>
        <Destination data={data}></Destination>
      </Route>
      <Route path="*">
        <Nomatch></Nomatch>
        </Route>
    </Switch>
     </Router>
   
    </div>
  );
}

export default App;