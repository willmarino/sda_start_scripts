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

accessListPromise = () => {
  return new Promise((resolve, reject) => {
    request(options, (err, resp, body) => {
      if(err){
        reject(err)
      }else{
        resolve(body)
      }
    })
  })
}

const getOldCIDRs = async () => {
  const oldCIDRs = []
  const accessList = await accessListPromise();
  console.log('aight')
  JSON.parse(accessList).results.forEach((alEntry) => {
    if(config.mongoAccessListEntryNames.includes(alEntry.comment)){
      oldCIDRs.push(alEntry.cidrBlock);
    }
  })
  return oldCIDRs;
}

getOldCIDRs();

module.exports = {
  getOldCIDRs
}