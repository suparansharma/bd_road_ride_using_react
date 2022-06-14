import React, { useEffect } from 'react';
import './Home.css';
import bike from '../../images/Bike.png'
import bus from '../../images/Bus.png'
import train from '../../images/Train.png'
import car from '../../images/Car.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Home = () => {
    // useEffect(()=>{
    //     fetch(data)
    //     .then(res=>res.json())
    //     .then(result=>console.log(result))
    // },[])
    // console.log(data);
    return (
        <div className="backgroundImage">
    <div class="row rowOfhome container">
  <div class=" col-md-3 singleColum">
    <a   className='rideName'href="/destination">
    <img src={bike} alt="" srcset="" />
        <h3>Bike</h3>
    </a>
      
  </div>
  <div class=" col-md-3 singleColum">
  <a className='rideName'href="/destination">
  <img src={car} alt="" srcset="" />
        <h3 >Car</h3>
    </a>
      
      </div>
  <div class=" col-md-3 singleColum">
  <a className='rideName' href="/destination">
  <img src={bus} alt="" srcset="" />
        <h3 >Bus</h3>
    </a>


      </div>
  <div class=" col-md-3 singleColum">
  <a className='rideName' href="/destination">
  <img src={train} alt="" srcset="" />
        <h3 >Train</h3>
    </a>
 
      </div>
</div>
        </div>




/* <div className="row m-5 p-5 justify-content-center ">
<Link to="/destination" className=" bike col-md-2  text-center m-3 p-4 ">
        <Button  className="bg-light">
                <img src={bike} style={{ width: "150px" }} alt="" />
                <h4 className="p-4 text-dark">BIKE</h4>
        </Button>
</Link>
<Link to="/destination" className=" car col-md-2  text-center m-3 p-4">
        <Button  className="bg-light">
                <img src={car} style={{ width: "150px" }} alt="" />
                <h4 className="p-4 text-dark">CAR</h4>
        </Button>
</Link>
<Link to="/destination" className=" bus col-md-2  text-center m-3 p-4">
<Button className="bg-light">
        <img src={bus} style={{ width: "150px" }} alt="" />
        <h4 className="p-4 text-dark">BUS</h4>
</Button>
</Link>
<Link to="/destination" className="bus col-md-2  text-center m-3 p-4">
<Button  className="bg-light">
        <img src={train} style={{ width: "150px" }} alt="" />
        <h4 className="p-4 text-dark">TRAIN</h4>
</Button>
</Link>

</div>   */




    );
};

export default Home;




















