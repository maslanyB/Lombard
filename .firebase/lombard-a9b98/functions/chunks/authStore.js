import { getAuth } from "firebase/auth";
import { w as writable } from "./index.js";
import "firebase/analytics";
import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDeQYmIXDEloBkjc4EvchO8SOfVpwdAP9E",
  authDomain: "lombard-a9b98.firebaseapp.com",
  projectId: "lombard-a9b98",
  storageBucket: "lombard-a9b98.appspot.com",
  messagingSenderId: "34211878421",
  appId: "1:34211878421:web:102ab0016665686ee2a01c",
  measurementId: "G-BGD1JGRQDK"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getAuth(firebaseApp);
getFirestore(firebaseApp);
const authStore = writable({
  isLoading: true,
  currentUser: null
});
export {
  authStore as a
};
