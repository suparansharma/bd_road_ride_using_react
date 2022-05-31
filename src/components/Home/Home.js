import React from 'react';
import './Home.css';
import bike from '../../images/Bike.png'
import bus from '../../images/Bus.png'
import train from '../../images/Train.png'
import car from '../../images/Car.png'

const Home = () => {
    return (
        <div>
    <div class="row rowOfhome container">
  <div class=" col-md-3 singleColum">
      <img src={bike} alt="" srcset="" />
  </div>
  <div class=" col-md-3 singleColum">
      <img src={car} alt="" srcset="" />
      </div>
  <div class=" col-md-3 singleColum">
  <img src={bus} alt="" srcset="" />
      </div>
  <div class=" col-md-3 singleColum">
  <img src={train} alt="" srcset="" />
      </div>
</div>
        </div>
    );
};

export default Home;