import { getToken } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";
import { vapidKey } from "./config.js";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = firebase.messaging();
getToken(messaging, {
  vapidKey: vapidKey,
})
  .then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
      // TODO: Send the token to your server and update the UI if necessary
    } else {
      // TODO: Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });
