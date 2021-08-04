
self.addEventListener('push', () => {
    self.registration.sendNotification('Hoxro sends a notification', {});
});