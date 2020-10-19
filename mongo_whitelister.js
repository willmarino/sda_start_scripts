const axios = require('axios');
require('dotenv').config();

const mongoGroupID = process.env.MONGO_GROUPID;
axios.get(`/groups/${mongoGroupID}/accessList`)
  .then((successResp) => { console.log(`success: ${successResp}`) })
  .catch((errorResp) => { console.log(`error: ${errorResp}`) })





