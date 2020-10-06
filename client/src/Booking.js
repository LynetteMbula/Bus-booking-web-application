import React, { useState, useEffect } from "react";

import Seats from "./Seats";

import "./booking.css";

const Booking = () => {
  //move nav bar seciton to index.html
  let seatsView = [];
  let [isSelected, setIsSelected] = useState(() => Array(36).fill(false));

  const seatLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  for (let a = 1; a <= 9; a++) {
    for (let i = 0; i < 9; i++) {
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
      <div class="nav-bar">
        <ul>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
      </div>
      <div class="page-body">
        Booking details
        <h4>Disclaimer:</h4>
        <p>
          Children below three (3) years may travel free of charge provided the
          child is accompanied by an adult, however no seat will be allocated
          solely for the child. For children three (3) years and above, you are
          required to purchase a boarding ticket.
        </p>
        <div class="seats-view">
          <ul class="col1">
            {renderSeats(0)}
            {renderSeats(1)}
            {renderSeats(2)}
            {renderSeats(3)}
            {renderSeats(4)}
            {renderSeats(5)}
            {renderSeats(6)}
            {renderSeats(7)}
            {renderSeats(8)}
          </ul>
          <ul class="col1">
            {renderSeats(9)}
            {renderSeats(10)}
            {renderSeats(11)}
            {renderSeats(12)}
            {renderSeats(13)}
            {renderSeats(14)}
            {renderSeats(15)}
            {renderSeats(16)}
            {renderSeats(17)}
          </ul>
          <ul class="col1">
            {renderSeats(18)}
            {renderSeats(19)}
            {renderSeats(20)}
            {renderSeats(21)}
            {renderSeats(22)}
            {renderSeats(23)}
            {renderSeats(24)}
            {renderSeats(25)}
            {renderSeats(26)}
          </ul>
          <ul class="col1">
            {renderSeats(27)}
            {renderSeats(28)}
            {renderSeats(29)}
            {renderSeats(30)}
            {renderSeats(31)}
            {renderSeats(32)}
            {renderSeats(33)}
            {renderSeats(34)}
            {renderSeats(35)}
          </ul>
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
      </div>
    </div>
  );
};

export default Booking;
