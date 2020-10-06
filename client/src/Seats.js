import React, { useState } from "react";

const Seats = (props) => {
  // get seatState from the server
  const seatState = "available";

  //let [isSelected, setisSelected] = useState(false);
  return (
    <td>
      <button className={props.className} onClick={props.onClick}>
        {props.seatNo}
      </button>
    </td>
  );
};

export default Seats;
