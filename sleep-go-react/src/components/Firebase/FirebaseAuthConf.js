import firebase from 'firebase';

const fireBaseAuthConf = {
     // Your web app's Firebase configuration
    apiKey: "AIzaSyBwLLUF-HBmi_BGatXgB3ea0UDp0YPA9Po",
    authDomain: "burger-builder-4522b.firebaseapp.com",
    databaseURL: "https://burger-builder-4522b.firebaseio.com",
    projectId: "burger-builder-4522b",
    storageBucket: "burger-builder-4522b.appspot.com",
    messagingSenderId: "179058322029",
    appId: "1:179058322029:web:a6d2303f97c81ddf"
  };
  // Initialize Firebase
  firebase.initializeApp(fireBaseAuthConf);

export default fireBaseAuthConf;