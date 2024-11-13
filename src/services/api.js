import axios from 'axios';
// const axios = require('axios');
export const submitFeedback = (dataabc) => {
    let data = JSON.stringify({
        "api_key": "QtOaDjEZSJsHUvsuxcuKab",
        "email": "kabaleeswaran110@gmail.com",
        "first_name": "kabali",
        "last_name": "eswaran",
        "companySize": "11-50",
        "phone_number": "6369323238",
        "helpOptions": "improve-communication"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://insurvey.sendmsg.in/mobileicsmobile/AddMessage.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(response);
    return false;
};