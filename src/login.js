import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userNickname", nickname);

    // 메인 페이지로 이동
    navigate("/main");
  };

  return (
    <div id="Login_p">
      <form onSubmit={handleSubmit} id="login_F">
        닉네임:{" "}
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
