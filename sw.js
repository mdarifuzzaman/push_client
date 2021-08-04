
self.addEventListener('push', () => {
    console.log(self.registration);
    self.registration.sendNotification('Hoxro sends a notification', {});
});