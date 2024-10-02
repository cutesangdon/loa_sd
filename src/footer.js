import React from "react";
import "./styles.css";

const Footer = () => {
  const nickname = localStorage.getItem("userNickname");

  return (
    <footer>
        <p>donate: 신한 110-488-130204</p>
        <p>불만있음 전화해라: 010-7170-1594</p>
    </footer>
  );
};

export default Footer;
