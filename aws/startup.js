const AWS = require('aws-sdk');
const instanceIds = require('../config/secrets').instanceIds;

console.log('starting aws servers');
AWS.config.update({
  "region": 'us-east-1'
})
      
const params = {
  InstanceIds: instanceIds
}

const ec2 = new AWS.EC2();

const startInstancesPromise = () => {
  return new Promise((resolve, reject) => {
    ec2.startInstances(params, (err, data) =>{
      if(err){
        reject(err)
      }else{
        console.log('bootup initiated...');
        resolve(data)
      }
    })

  })
}

const bootUp = async () => {
  const res = await startInstancesPromise()
}

module.exports = {
  bootUp
}