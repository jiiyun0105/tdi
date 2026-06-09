import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-aLd3Qz0xV7fWf-P7K1C-g_oJ5L4Yc4k",
  authDomain: "tdi-dongil-portal.firebaseapp.com",
  projectId: "tdi-dongil-portal",
  storageBucket: "tdi-dongil-portal.appspot.com",
  messagingSenderId: "567385202684",
  appId: "1:567385202684:web:0cf46876c666f284560a67"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);