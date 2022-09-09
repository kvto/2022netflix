// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA22ij82Dc650YuS1oZOd5qhx8g-DyDy3k",
  authDomain: "netflix-af3e5.firebaseapp.com",
  projectId: "netflix-af3e5",
  storageBucket: "netflix-af3e5.appspot.com",
  messagingSenderId: "430902030340",
  appId: "1:430902030340:web:952e8413d3b0c7c27c0551"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;