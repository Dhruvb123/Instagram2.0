import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
        apiKey: "AIzaSyD049ILgJ1qfrDWHxGSk1ZE579yKNL1pgY",
        authDomain: "clone-2057d.firebaseapp.com",
        databaseURL: "https://clone-2057d-default-rtdb.firebaseio.com",
        projectId: "clone-2057d",
        storageBucket: "clone-2057d.appspot.com",
        messagingSenderId: "779877901494",
        appId: "1:779877901494:web:fb3af399cc28993810b217"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); 

export { app, db, auth, storage };
