importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    projectId: "bustruker-9f717",
    messagingSenderId: "543529041667",
    appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

// التعامل مع الإشعار عند وصوله في الخلفية
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // تأكد من وجود أيقونة مناسبة
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
