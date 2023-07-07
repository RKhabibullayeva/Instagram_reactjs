import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCUboO4NwchNR9xy4MmLzymG7ljDQsezQ",
  authDomain: "instaaagram-d8270.firebaseapp.com",
  projectId: "instaaagram-d8270",
  storageBucket: "instaaagram-d8270.appspot.com",
  messagingSenderId: "750286155652",
  appId: "1:750286155652:web:392e67c1f0c0eff02577d1"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { firestore, auth, storage, analytics };