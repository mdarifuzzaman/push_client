var push = require('web-push');

let vapidkeys = {
    publicKey: 'BFgMRmK2qEMkEMButOOFhlWqFJltgqAIf2751uJtRC_G7svm6QcLGxaiiNWe_RjQS0u4HeCpWdrB8rUKz3InY5E',       
    privateKey: 'vESlUVZ2OVWfzyO1OXi6z8nEBnPH974jstF9wxoGnB8'
  };

  push.setVapidDetails('mailto:test@hoxro.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fq1M18CzvHQ:APA91bGFAmw0v1KLEo5T4OzJ4suiyrtUH4fwv6RKqtVOQ6FKK137bWGkZlp5_ee7PVs56N7JZdeqGQNHyioPr-TuGzZlUrza_hi6ziwecugx8WFfYLeL8DHeVgPah00MRXhgy_5wrll0","expirationTime":null,"keys":{"p256dh":"BDMjqVmc8X9UF0V5CNEr-KaSEiW28SXFU2fro9U0arnzIxvSbJIiL1NPG_8OIE-4RRbyyfmIWkwtNrbMsnjAeJQ","auth":"_hkCj9IoKVYRdLtkKAd4iA"}};
  push.sendNotification(sub, '{"title": "hello there", "message": "hey how are you"}');