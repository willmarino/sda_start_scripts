const AWS = require('aws-sdk');
const instanceIds = require('../config/secrets').instanceIds;

AWS.config.update({
  "region": 'us-east-1'
})
const params = {
  InstanceIds: instanceIds
}
const ec2 = new AWS.EC2();


const describeInstancesPromise = () => {
  return new Promise((resolve, reject) => {
    ec2.describeInstances(params, (err, data) => {
      if(err){
        reject(err);
      }else{
        console.log(data.Reservations[0].Instances);
        const newDNSAddresses = {}
        data.Reservations.forEach((instanceObj) => {
          const currentKey = instanceObj.Instances[0].KeyName
          newDNSAddresses[currentKey] = instanceObj.Instances[0].PublicIpAddress
        })
        resolve(newDNSAddresses);
      }
    })
  })
}

const getIPAddresses = async () => {
  let ready = false;
  const descriptionInterval = setInterval( async () => {
    const res = await describeInstancesPromise();
    ready = Object.values(res).every((val) => val);
    if(ready){
      clearInterval(descriptionInterval);
    }
  }, 10000)
}

getIPAddresses()

module.exports = {
  getIPAddresses
}