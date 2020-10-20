import React, { useState, useEffect, useRef } from "react";

const Payment = () => {
  const [paidStatus, setPaidStatus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sent, setSent] = useState(false);
  const handleSent = () => {
    setSent(!sent);
  };
  const handleClick = async () => {
    const pn = { number: phoneNumber };
    const result = await fetch("/makepayment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pn),
    });
    const payRes = await result.json();
    if (payRes.status === "success") {
      setPaidStatus(!paidStatus);
    }
  };
  const iniRender = useRef(true);
  useEffect(() => {
    if (iniRender.current) {
      iniRender.current = false;
    } else {
      handleClick();
    }
  }, [sent]);

  return (
    <section className="payment-form">
      <form>
        <h3>Please Enter Your Number,Without the 0 at the beginning</h3>
        <label for="phonenumber">+254: </label>
        <input
          type="text"
          name="number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />{" "}
        <br />
        <button type="button" onClick={handleSent}>
          Pay
        </button>
      </form>
      {paidStatus ? <h3>payment being processed, please wait...</h3> : ""}
    </section>
  );
};

export default Payment;
