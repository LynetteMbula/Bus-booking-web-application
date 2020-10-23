import React, { useState, useEffect } from "react";

import Seats from "./Seats";

import "../Css/Booking.css";

import driverWheel from "../Images/car-steering-wheel.png";

const Booking = () => {
  //move nav bar seciton to index.html
  // driverWheel icon need to be attirbuted
  let seatsView = [];
  let [isSelected, setIsSelected] = useState(() => Array(36).fill(false));

  //const seatLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const seatLetter = ["A", "B", "C", "D"];

  for (let a = 1; a <= 9; a++) {
    for (let i = 0; i < 4; i++) {
      seatsView.push(a + seatLetter[i]);
    }
  }
  console.log(isSelected);

  const renderSeats = (num) => {
    return (
      <Seats
        seatNo={seatsView[num]}
        onClick={() => {
          const seats = isSelected.slice();
          seats[num] = !isSelected[num];
          setIsSelected((isSelected = seats));
          //setIsSelected((isSelected[num] = !isSelected[num]));
          // setIsSelected(
          //   Object.assign(Array.from(isSelected), { [num]: !isSelected[num] })
          // );
        }}
        className={isSelected[num] ? "selected" : "available"}
      />
    );
  };

  return (
    <div>
      <div class="seats-view">
        <span>entrance</span>
        <br />
        <table border="5px">
          <tr>
            <td colSpan="2">Entrance</td>
            <td className="blank-cell"></td>
            <td className="driver-seat" colSpan="2">
              Driver
              <img src={driverWheel} />
            </td>
          </tr>
          <tr>
            {renderSeats(0)}
            {renderSeats(1)}

            <td className="space"></td>
            {renderSeats(2)}
            {renderSeats(3)}
          </tr>
          <tr>
            {renderSeats(4)}
            {renderSeats(5)}
            <td className="space"></td>
            {renderSeats(6)}
            {renderSeats(7)}
          </tr>
          <tr>
            {renderSeats(8)}
            {renderSeats(9)}
            <td className="space"></td>
            {renderSeats(10)}
            {renderSeats(11)}
          </tr>
          <tr>
            {renderSeats(12)}
            {renderSeats(13)}
            <td className="space"></td>
            {renderSeats(14)}
            {renderSeats(15)}
          </tr>
          <tr>
            {renderSeats(16)}
            {renderSeats(17)}
            <td className="space"></td>
            {renderSeats(18)}
            {renderSeats(19)}
          </tr>
          <tr>
            {renderSeats(20)}
            {renderSeats(21)}
            <td className="space"></td>
            {renderSeats(22)}
            {renderSeats(23)}
          </tr>
          <tr>
            {renderSeats(24)}
            {renderSeats(25)}
            <td className="space"></td>
            {renderSeats(26)}
            {renderSeats(27)}
          </tr>
          <tr>
            {renderSeats(28)}
            {renderSeats(29)}
            <td className="space"></td>
            {renderSeats(30)}
            {renderSeats(31)}
          </tr>
          <tr>
            {renderSeats(32)}
            {renderSeats(33)}
            <td className="space"></td>
            {renderSeats(34)}
            {renderSeats(35)}
          </tr>
        </table>
        <ul class="help-icons">
          <li>
            <button className="available">Available</button>
          </li>
          <li>
            <button className="selected">Selected</button>
          </li>
          <li>
            <button className="taken">Already Booked</button>
          </li>
        </ul>
      </div>
      {/* add a send button for seelcted seats, it will be filtered from the isSelected array[] */}
    </div>
  );
};

export default Booking;
