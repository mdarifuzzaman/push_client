
self.addEventListener('push', (params) => {
    console.log(params);
    self.registration.sendNotification('Hoxro sends a notification', {});
});