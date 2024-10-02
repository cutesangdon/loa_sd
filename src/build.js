import React from "react";
import "./styles.css";

const Build = () => {
  const nickname = localStorage.getItem("userNickname");
  const build_lk = "https://lostbuilds.com/info/" + nickname;

  return (
    <div className="Main_css">
      <h1>Welcome!</h1>
      {nickname && (
        <div>
          <p>Nickname: {nickname}</p>
          <object data={build_lk} />
        </div>
      )}
    </div>
  );
};

export default Build;
