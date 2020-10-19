const request = require('request');
const config = require('./config/secrets');

const mongoGroupID = config.mongoGroupID;

const options = {
  uri: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${mongoGroupID}/accessList?pretty=true`,
  auth: {
    user: config.mongoAPIKeys.public,
    pass: config.mongoAPIKeys.private,
    sendImmediately: false
  }
}

request(options, (err, resp, body) => {
  console.log(`err is ${err}`)
  console.log(`resp is ${resp}`)
  console.log(`body is ${body}`)
})


