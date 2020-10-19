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

ec2.startInstances(params, (err, data) =>{
  if(err){
    console.log(`err is: ${err}`);
  }else{
    console.log(data);
  }
})

console.log('aws servers have been started');