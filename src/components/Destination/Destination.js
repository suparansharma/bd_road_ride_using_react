import React, { useState } from "react";
import Map from "./Map";
import "./Destination.css";

function Destination() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  



  const submitBtn = () => {
    console.log("click");
    const submitArea = document.getElementById("fillA");
    submitArea.style.display = "none";
    const billLoccationArea = document.getElementById("billLoccationArea");
    billLoccationArea.style.display = "block";

  }

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
        <h3>After Submit Area</h3>
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
