import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD17tep9VyCm7AL8Wu1KgdlBtRMkW-5w4A",
  authDomain: "fb-learn-111.firebaseapp.com",
  databaseURL:
    "https://fb-learn-111-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fb-learn-111",
  storageBucket: "fb-learn-111.appspot.com",
  messagingSenderId: "374810721215",
  appId: "1:374810721215:web:2b8a5f8c69600afe2bbf0a",
};

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: getAuth(app),
  database: getDatabase(app),
  storage: getStorage(app),
};
