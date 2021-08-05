var push = require('web-push');

let vapidkeys = {
    publicKey: 'BFgMRmK2qEMkEMButOOFhlWqFJltgqAIf2751uJtRC_G7svm6QcLGxaiiNWe_RjQS0u4HeCpWdrB8rUKz3InY5E',       
    privateKey: 'vESlUVZ2OVWfzyO1OXi6z8nEBnPH974jstF9wxoGnB8'
  };

  push.setVapidDetails('mailto:test@hoxro.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
  let sub = {"endpoint":"https://wns2-sg2p.notify.windows.com/w/?token=BQYAAACV2oJaey5aFSgyPfPlArPsqmLlTrZ%2fNg%2fpp5fzYvZ2wmjfaX4ug%2fgsFd%2bVr2mHDuc3VaWKW1UACrwQ4jR8qmKl9hUyQmPqYfIELTKHPIup%2bH9ebAdI5NfrP7xxqRXCHdymKcfIn3D%2bwLKWPH8ildkFuQF8PI7wwPkY6ZD4LQp4snrqQMfqNSkQLlyYycIqT2oiZ%2b5sW9OHenF0Aeob0qvfnfxAS89lpnwvRQJb6pV78AT%2bLkyywEmdYcG22iPG7EcxtI7E5%2fdpM9M2IPl2qMy0%2bAZIEnNyXl0XpbHJpssX%2fUYCNLzd5OXSpcdakf4NE56m6aktW7UF5OsGXcQorC0n","expirationTime":null,"keys":{"p256dh":"BNyYmSmN4oSMu-L2XLbxnhCZjUIleqeBzb3-9VOkLED2ENAVcAjAOmdcdz9-FLbTt7eCrFQN18uKNMsxH_iLO9U","auth":"z7wL7Y7UBblAI98OEyiaJg"}};
  push.sendNotification(sub, '{"title": "from hoxro", "message": "A matter is created."}');