// messaging_receive_message.js----------------------------------------------
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
import { onMessage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";

const messaging = firebase.messaging();

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  alert(payload.notification.body);
  // ...
});
// ----------------------------------------------------------------
