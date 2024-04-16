import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDS1eihhVdfex-WLe-c_Ch1EgHKHI-xk3s",
    authDomain: "tech-space-56ae0.firebaseapp.com",
    projectId: "tech-space-56ae0",
    storageBucket: "tech-space-56ae0.appspot.com",
    messagingSenderId: "329633009481",
    appId: "1:329633009481:web:96792699b6e30a8b9f1498",
    measurementId: "G-XDYXMDDMP7"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  const storage = getStorage(firebaseApp);

  export { db, auth,storage };