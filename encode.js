const btoa = require("btoa");

//base64.encode(Shortcode+Passkey+Timestamp)
//YYYYMMDDHHmmss
//const pass = btoa()

const shortcode = 174379;

const passkey =
  "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";

function convertMonth(month) {
  if (month + 1 > 9) {
    return String(month + 1);
  } else {
    return String("0" + (month + 1));
  }
}

function convertTimeToTwoDig(time) {
  if (time + 1 > 9) {
    return String(time + 1);
  } else {
    return String("0" + (time + 1));
  }
}
let ts = Date.now();

current = new Date(ts);

year = current.getFullYear();
month = convertMonth(current.getMonth());
day = current.getDate();
hour = convertTimeToTwoDig(current.getHours());
minute = convertTimeToTwoDig(current.getMinutes());
second = convertTimeToTwoDig(current.getSeconds());

tsSafFormat = "" + year + month + day + hour + minute + second;

let passToEncode = shortcode + passkey + tsSafFormat;
let finalPass = btoa(passToEncode);
console.log(tsSafFormat);
console.log(finalPass);
module.exports = {
  tsSafFormat: tsSafFormat,
  finalPass: finalPass,
};
