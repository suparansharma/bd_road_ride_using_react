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
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();


function App() {
const [loggedInUser, setLoggedInUser] = useState({});
const [pickFrom, setPickFrom] = useState([]);
const [pickTo, setPickTo] = useState([]); 
  const [rider, setRider] = useState([])
  const handleRider = (ride) => {
      setRider(ride)
      console.log(ride);
      console.log("popopop",rider);
    }
    const handleSearch = () => {
      const pickFrom = document.getElementById("pickFrom").value;
      const pickTo = document.getElementById("pickTo").value;
      // console.log(pickFrom,pickTo)
      setPickFrom(pickFrom);
      setPickTo(pickTo);
    }
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
     
     <h3>{loggedInUser.email}</h3>

     <Router>
     <Switch>
     <Route exact path="/"> 
     <Header loggedInUser={loggedInUser}></Header>

      </Route>

      <Route exact path="/home"> 
      <Header></Header>
      <Home handleRider={handleRider}></Home>
      </Route>
      <Route path="/login"> 
      <Header></Header>
      <Login></Login>
      </Route>
      <PrivateRoute path="/destination">
      <Header></Header>
        <Destination data={data} handleSearch={handleSearch} pickFrom={pickFrom} pickTo={pickTo} ride={rider}></Destination>
      </PrivateRoute>
      <Route path="*">
        <Nomatch></Nomatch>
        </Route>  
    </Switch>
     </Router>
   
    </UserContext.Provider>
  );
}

export default App;