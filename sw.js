
self.addEventListener('push', (event) => {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
      }
    
      var data = {};
      if (event.data) {
        data = event.data.json();
      }
      var title = data.title || "Something Has Happened";
      var message = data.message || "Here's something you might want to check out.";

    var options = {
        body: message,
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: 'Explore the hoxro system', icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close', icon: 'images/xmark.png'}
        ]        
    };

    e.waitUntil(self.registration.showNotification(title, options));

});