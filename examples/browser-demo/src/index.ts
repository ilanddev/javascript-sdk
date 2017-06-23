import {IlandBrowserAuthProvider, Iland, User} from "iland-sdk";

const CLIENT_ID = 'YOUR_PUBLIC_CLIENT_ID';

// initialize the SDK
Iland.init(new IlandBrowserAuthProvider({
  clientId: CLIENT_ID
}));

// This will trigger authentication (redirect you to the login page), and will
// then redirect you back to the application and log your username in the browser
// console
User.getCurrentUser().then(function(you) {
  console.log(you.toString());
});
