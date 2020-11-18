import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyCdbA-Y6TsRAI91-G4osYnyVUrjLomclag",
    authDomain: "testing-e6643.firebaseapp.com",
    databaseURL: "https://testing-e6643.firebaseio.com",
    projectId: "testing-e6643",
    storageBucket: "testing-e6643.appspot.com",
    messagingSenderId: "965519684362",
    appId: "1:965519684362:web:ee8af875dd0fc858e340f3",
    measurementId: "G-NHLRCMFB3L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase