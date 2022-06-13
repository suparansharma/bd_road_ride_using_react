import React, { useState } from "react";
import Map from "./Map";
import "./Destination.css";

function Destination() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  
  // const loginBtn = document.getElementById("login");
  //       loginBtn.addEventListener("click", function(){
  //           const loginArea = document.getElementById("login-area");
  //           loginArea.style.display = "none";
  //           const transactionArea = document.getElementById("transaction-area");
  //           transactionArea.style.display = "block";
  //       })



  return (
    <div className="row mapingRow container">
      <div className="col fillUpArea " id="fillA">
        <input
          className="inputBox"
          type="text"
          placeholder="Starting From"
          onBlur={(e) => setOrigin(e.target.value)}
        />{" "}
        <br />
        <input
          className="inputBox"
          type="text"
          placeholder="Going to"
          onBlur={(e) => setDestination(e.target.value)}
        />
        <br />
        <input
          className="searchBtn"
          id="searchB"
          type="submit"
        />
      </div>

      <div id="afterSubmit">
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
