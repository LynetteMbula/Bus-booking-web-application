const express = require("express");
const app = express();
const http = require("http").createServer(app);
require("dotenv").config();
const passKeyNTs = require("./encode");
const PORT = process.env.PORT || 3117;
const fetch = require("node-fetch");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// safaricom's callback URL needs https, it will not respond to http

//encode to base64

app.get("/", (req, res) => {
  res.json("request received!");
});

app.post("/makepayment", (req, res) => {
  //encode the passkey with imported encode func

  //get auth token from mpesa api
  consumer_key = process.env.CONSUMER_KEY;
  consumer_secret = process.env.CONSUMER_SECRET;
  auth =
    "Basic " +
    //need to replace the buffer
    new Buffer(consumer_key + ":" + consumer_secret).toString("base64");

  let getAuth = async () => {
    let result = await fetch(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        method: "GET",
        headers: {
          Authorization: auth,
        },
      }
    );

    return result.json();
  };

  //make request to mpesa api end point
  let makePayRequest = async (oauth_token) => {
    url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    auth = "Bearer " + oauth_token;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BusinessShortCode: "174379",
        Password: passKeyNTs.finalPass,
        Timestamp: passKeyNTs.tsSafFormat,
        TransactionType: "CustomerPayBillOnline",
        Amount: "1",
        PartyA: "254" + req.body.number,
        PartyB: "174379",
        PhoneNumber: "254" + req.body.number,
        CallBackURL: "https://bc8c55b5e339.ngrok.io/hooks/mpesa",
        AccountReference: "test",
        TransactionDesc: "test effy",
      }),
    });

    console.log(req.body.number);
    return response.json();
  };

  getAuth()
    .then((jsonData) => {
      {
        return jsonData.access_token;
      }
    })
    .then(makePayRequest)
    .then((mpesaResponse) => {
      console.log(mpesaResponse);
    });
  res.json({ status: "success" });
});

//receives on the status/details of transaction
app.post("/hooks/mpesa", (req, res) => {
  console.log("reveived mpesa webhook");
  console.log("------------------");
  console.log(req.body);
  if (req.body.stkCallback.ResultCode === 0) {
    res.json(message);
  } else {
    res.send("auth failed");
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});

// [0]   Body: {
// [0]     stkCallback: {
// [0]       MerchantRequestID: '21233-5503446-1',
// [0]       CheckoutRequestID: 'ws_CO_191020202349561172',
// [0]       ResultCode: 0,
// [0]       ResultDesc: 'The service request is processed successfully.',
// [0]       CallbackMetadata: [Object]
// [0]     }
// [0]   }
// [0] }
