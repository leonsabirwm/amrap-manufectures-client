// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4OLVHq6bRy7LhiR8KpF6PjnO0lYijK_M",
  authDomain: "amrap-4349b.firebaseapp.com",
  projectId: "amrap-4349b",
  storageBucket: "amrap-4349b.appspot.com",
  messagingSenderId: "415342963534",
  appId: "1:415342963534:web:df44138d9d0ae17f674c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;