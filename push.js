var push = require('web-push');

let vapidkeys = {
    publicKey: 'BFgMRmK2qEMkEMButOOFhlWqFJltgqAIf2751uJtRC_G7svm6QcLGxaiiNWe_RjQS0u4HeCpWdrB8rUKz3InY5E',       
    privateKey: 'vESlUVZ2OVWfzyO1OXi6z8nEBnPH974jstF9wxoGnB8'
  };

  push.setVapidDetails('test subject', vapidkeys.publicKey, vapidkeys.privateKey);
  let sub = {};
  push.sendNotification(sub, {});