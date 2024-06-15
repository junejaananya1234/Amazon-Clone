
import { getFirestore } from  "firebase/firestore"
import { getAuth } from "firebase/auth"
import { initializeApp,getApp,getApps } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuJTQbZKZoUy9BoD5S8W2NVN5VuyL14D0",
  authDomain: "fir-d2514.firebaseapp.com",
  projectId: "fir-d2514",
  storageBucket: "fir-d2514.appspot.com",
  messagingSenderId: "540569917514",
  appId: "1:540569917514:web:2493c643de81516abaeeb3"
};
let app;
if(getApps().length === 0){
  try {
    app = initializeApp(firebaseConfig)
  } catch (error) {
    console.log(error)
  }
}else{
  app = getApp()

}

// Initialize Firebase

const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB,auth } ;