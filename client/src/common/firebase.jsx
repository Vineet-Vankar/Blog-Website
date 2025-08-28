// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUjpjzyHXXGrwuSbioriZgEcY6GlMiLl0",
  authDomain: "blogify-d62e9.firebaseapp.com",
  projectId: "blogify-d62e9",
  storageBucket: "blogify-d62e9.firebasestorage.app",
  messagingSenderId: "751716526260",
  appId: "1:751716526260:web:363c801fb7b8cb40224fe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Google Auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })

    return user;

}