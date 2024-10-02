import React from "react";
import "./styles.css";

const Main = () => {
  const nickname = localStorage.getItem("userNickname");
  const loawa_lk = "https://loawa.com/char/" + nickname;

  return (
    <div className="Main_css">
      <h1>Welcome!</h1>
      {nickname && (
        <div>
          <p>Nickname: {nickname}</p>
          <object data={loawa_lk} />
        </div>
      )}
    </div>
  );
};

export default Main;
