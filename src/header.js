import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const name = localStorage.getItem("userName");
  const nickname = localStorage.getItem("userNickname");
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  return (
    <div className="Header_css">
      {nickname && (
        <header>
          <ul className="header_li">
            <li>
              <a href="/main" className="li_itemL">
                로아와
              </a>
            </li>
            <li>
              <a href="/build" className="li_itemL">
                로스트빌드
              </a>
            </li>
            <li>
              <a href="/cunning" className="li_itemL">
                컨닝페이퍼
              </a>
            </li>
            <li>
              <a href="/clear" className="li_itemL">
                클리어골드
              </a>
            </li>
            <li>
              <a href="/help" className="li_itemL">
                알파고~
              </a>
            </li>
            <li className="li_itemR">
              <p>Nickname: {nickname}</p>
            </li>
            <li>
              <button onClick={logout} className="li_itemR">
                로그아웃
              </button>
            </li>
          </ul>
        </header>
      )}
    </div>
  );
};

export default Header;
