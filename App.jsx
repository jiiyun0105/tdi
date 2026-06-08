import React, { useState, useEffect } from "react";
// 아까 우리가 만든 창고 열쇠(db) 가져오기!
import { db } from "./firebase"; 
// 파이어베이스에서 데이터를 저장하고 읽어오는 도구들 가져오기
import { doc, setDoc, onSnapshot } from "firebase/firestore";

function App() {
  // 화면에 보여줄 글과 관리자가 입력할 글을 기억하는 상자들
  const [displayText, setDisplayText] = useState("로딩 중...");
  const [inputText, setInputText] = useState("");

  // 1. [실시간 보기] 파이어베이스 창고에 저장된 글을 실시간으로 감시해서 화면에 띄우기
  useEffect(() => {
    // 'portalData'라는 상자 안의 'main'이라는 문서를 실시간으로 지켜봅니다
    const unsubscribe = onSnapshot(doc(db, "portalData", "main"), (docSnap) => {
      if (docSnap.exists()) {
        // 창고에 글이 있다면 그 글을 화면에 보여줘!
        setDisplayText(docSnap.data().content);
      } else {
        // 창고가 비어있다면 기본 안내 문구를 보여줘!
        setDisplayText("아직 등록된 정보가 없어요 😅");
      }
    });

    return () => unsubscribe(); // 화면이 꺼지면 감시를 중단합니다
  }, []);

  // 2. [관리자 모드] 수정 버튼을 누르면 파이어베이스 창고에 글을 저장하는 함수
  const handleUpdate = async () => {
    if (!inputText.trim()) {
      alert("수정할 내용을 입력해 주세요!");
      return;
    }

    try {
      // 'portalData' 상자의 'main' 문서에 관리자가 쓴 글을 덮어씌웁니다
      await setDoc(doc(db, "portalData", "main"), {
        content: inputText,
        updatedAt: new Date()
      });
      alert("파이어베이스 창고 수정 완료! 다른 사람 화면에도 즉시 반영됩니다.");
      setInputText(""); // 입력창 비우기
    } catch (error) {
      console.error("저장 중 에러 발생:", error);
      alert("저장에 실패했어요 ㅠㅠ 보안 규칙을 확인해 보세요!");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>📢 실시간 공지 보드</h1>
      
      {/* 띄워주는 화면 (다른 사람들도 똑같이 보는 화면) */}
      <div style={{ 
        background: "#f0f2f5", padding: "20px", borderRadius: "8px", 
        fontSize: "20px", fontWeight: "bold", margin: "20px 0" 
      }}>
        {displayText}
      </div>

      <hr style={{ margin: "40px 0", border: "0.5px solid #ccc" }} />

      {/* 관리자 모드 영역 */}
      <h3>🛠️ 관리자 수정 모드</h3>
      <input 
        type="text" 
        placeholder="수정할 내용을 입력하세요" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: "10px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={handleUpdate} style={{ padding: "10px 20px", cursor: "pointer" }}>
        수정하기
      </button>
    </div>
  );
}

export default App;