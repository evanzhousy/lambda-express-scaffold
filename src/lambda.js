const serverless = require('serverless-http');

const app = require('./app')

exports.lambdaHandler = serverless(app);
