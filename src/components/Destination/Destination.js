import React, { useState } from "react";
import Map from "./Map";
import "./Destination.css";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PeopleIcon from '../../images/peopleicon.png'
import bike from '../../images/Bike.png'
import bus from '../../images/Bus.png'
import train from '../../images/Train.png'
import car from '../../images/Car.png'
function Destination(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const{fee,seat,ride}=props;
  // const [rides] = data.filter(r => r.ride == ride);
    // const {fee,seat} = rides;
  let rideImage = bike;
   
  if (ride === "bike") {
      rideImage = bike;  
  }
  else if (ride === "car") {
      rideImage = car;
  }
  else if (ride === "bus") {
      rideImage = bus;
  }
  else if (ride === "train") {
      rideImage = train;
     
  }



  const submitBtn = () => {
    console.log("click");
    const submitArea = document.getElementById("fillA");
    submitArea.style.display = "none";
    const billLoccationArea = document.getElementById("billLoccationArea");
    billLoccationArea.style.display = "block";

  }
  console.log(origin,destination);

  return (
    <div className="row mapingRow container">
      <div className="col fillUpArea " id="fillA">
        <p>Pick From</p>
        <input
          className="inputBox"
          type="text"
          placeholder="Starting From"
          onBlur={(e) => setOrigin(e.target.value)}
        />{" "}
        <br />
        <p>Pick To</p>
        <input
          className="inputBox"
          type="text"
          placeholder="Going to"
          onBlur={(e) => setDestination(e.target.value)}
        />
        <br />
        {/* <input
          className="searchBtn"
          id="searchB"
          type="submit"
        /> */}
        <button onClick={submitBtn}  className="searchBtn" id="searchB" type="submit">Submit</button>
      </div>

      <div id="billLoccationArea">
 
            <div className="col-md-3 m-5 " style={{ backgroundColor: "#EFEFEF" }}>
                <div className="row " style={{ backgroundColor: "#FF6E40", color: "white",width: '370%',marginLeft: '-55%'}}>
                  <Timeline >
                      <TimelineItem >
                         
                              <TimelineDot ></TimelineDot>
                       
                          <TimelineContent >{origin}</TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                          <TimelineSeparator>
                              <TimelineDot ></TimelineDot>
                          </TimelineSeparator>
                          <TimelineContent>{destination}</TimelineContent>
                      </TimelineItem>
                  </Timeline>

                </div>
                <div className="row">
                    <div className="col-2  ">
                        <img className="logoImades" src={rideImage} alt="image" />
                    </div>
                    <div className="col-2 m-2 text-center">
                        <p text-capitalize>{ride}  {seat}</p>
                    </div>
                    {/* <div className="col-2 m-2">
                        <p>${fee}</p>
                    </div> */}
                </div>
                {/* <div className="row  m-2 bg-light p-3">
                    <div className="col-2 m-1">
                        <img src={rideImage} style={{ width: "50px" }} alt="image" />
                    </div>
                    <div className="col-6 m-2 text-center">
                        <p text-capitalize>{ride} <img style={{width:'20px'}} src={PeopleIcon} alt=""/> {seat}</p>
                    </div>
                    <div className="col-2 m-2">
                        <p>${fee}</p>
                    </div>
                </div>
                <div className="row  m-2 bg-light p-3">
                    <div className="col-2 m-1">
                        <img src={rideImage} style={{ width: "50px" }} alt="image" />
                    </div>
                    <div className="col-6 m-2 text-center">
                        <p text-capitalize>{ride} <img style={{width:'20px'}} src={PeopleIcon} alt=""/> {seat}</p>
                    </div>
                    <div className="col-2 m-2">
                        <p>${fee}</p>
                    </div>
                </div> */}

            </div>
         

      </div>

        {/* <div className="showAvailableV" id="showAvailableVehicles">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            quia sed voluptatibus ratione blanditiis expedita similique officiis
            autem perspiciatis tempore debitis! Aut eveniet sequi soluta facere
            iste molestias ipsum sit?
          </p>
        </div> */}

      <div className="col mapArea">
        <Map origin={origin} destination={destination}></Map>
      </div>
    </div>
  );
}

export default React.memo(Destination);
