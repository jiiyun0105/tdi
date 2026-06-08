import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 지윤이 프로젝트의 고유 설정값
const firebaseConfig = {
  apiKey: "AiZyDj1zkSEW7zoaF8dqIu7tAWg-zt...", // ⚠️ 아까 보았던 지윤이의 진짜 apiKey로 채워주면 더 좋아!
  authDomain: "tdi-dongil-portal.firebaseapp.com",
  projectId: "tdi-dongil-portal",
  storageBucket: "tdi-dongil-portal.appspot.com",
  messagingSenderId: "197229565116",
  appId: "1:197229565116:web:aace10c5e584be..."
};

// 파이어베이스 시동 걸기
const app = initializeApp(firebaseConfig);
// 진짜 데이터 창고(Firestore) 연결하기
export const db = getFirestore(app);