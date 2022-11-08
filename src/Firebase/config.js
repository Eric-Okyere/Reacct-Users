
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqPpBd0zxkcIXMp6fmqsUVmGvznDbdzoE",
  authDomain: "crud-user-react.firebaseapp.com",
  projectId: "crud-user-react",
  storageBucket: "crud-user-react.appspot.com",
  messagingSenderId: "131569200480",
  appId: "1:131569200480:web:06e416f63ed20cbae54205"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);