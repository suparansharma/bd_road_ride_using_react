import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="backgroundImage">
     <Header></Header>
     <Home> </Home>
     <Login></Login>
    </div>
  );
}

export default App;