const axios = require('axios');
const config = require('./config/secrets');

const mongoGroupID = config.mongoGroupID;
axios.get(`/groups/${mongoGroupID}/accessList`)
  .then((successResp) => { console.log(`success: ${successResp}`) })
  .catch((errorResp) => { console.log(`error: ${errorResp}`) })





