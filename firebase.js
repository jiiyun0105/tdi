// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1zkSEW7zoaf8dqIu7tAWg-zt...", // 실제 복사한 전체 내용을 넣으세요
  authDomain: "tdi-dongil-portal.firebaseapp.com",
  projectId: "tdi-dongil-portal",
  storageBucket: "tdi-dongil-portal.appspot.com",
  messagingSenderId: "197229565116",
  appId: "1:197229565116:web:aace10c5e584bee886ecb9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);