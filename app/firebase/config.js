import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBC5ymV-rblbgXa_8vQKyIWgfBvQeXmMJU",
    authDomain: "pantry-tracker-db990.firebaseapp.com",
    projectId: "pantry-tracker-db990",
    storageBucket: "pantry-tracker-db990.appspot.com",
    messagingSenderId: "1045263805424",
    appId: "1:1045263805424:web:5b0eb8c05660a8dde6cb35",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };