AWS.config.getCredentials((err) => {
  if(err){
    console.log(`error: ${err}`);
  }else{
    console.log(`AWS ACCESS KEY: ${AWS.config.credentials.accessKeyId}`);
    console.log(`AWS ACCESS KEY: ${AWS.config.credentials.secretAccessKey}`);
    console.log(`AWS ACCESS KEY: ${AWS.config.region}`);
  }
})