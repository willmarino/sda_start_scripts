const bootUp = require('./aws/startup').bootUp;
const getIPAddresses = require('./aws/describe').getIPAddresses;


bootUp();
getIPAddresses();