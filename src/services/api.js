import axios from 'axios';
// const axios = require('axios');
export const submitFeedback = (dataabc) => {
    // let url="https://insurvey.sendmsg.in/mobileicsmobile/AddMessage.php";
    // const response = axios.post(url, dataabc);
const targetUrl = 'https://insurvey.sendmsg.in/mobileicsmobile/AddMessage.php';
const response = axios.post(targetUrl, dataabc, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
    console.log(response);
    return false;
};