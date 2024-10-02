import React, { useState } from "react";
import "./styles.css";
import AK_img from './img/AK.jpg'
import AH_img from './img/AH.jpg'
import RB_img from './img/RB.jpg'
import RV_img from './img/RV.jpg'
import RK_img from './img/RK.jpg'
import RA_img from './img/RA.jpg'
import RI_img from './img/RI.jpg'
import RMN_img from './img/RMN.jpg'
import RMH_img from './img/RMH.jpg'
import KE_img from './img/KE.jpg'
import KB_img from './img/KB.jpg'
//import KA_img from './img/KA.jpg'

const Cunning = () => {

  const [selectedOption, setSelectedOption] = useState("KM");
 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const imageMap = {
    AK_img: AK_img,
    AH_img: AH_img,
    RB_img: RB_img,
    RV_img: RV_img,
    RK_img: RK_img,
    RA_img: RA_img,
    RI_img: RI_img,
    RMN_img: RMN_img,
    RMH_img: RMH_img,
    KE_img: KE_img,
    KB_img: KB_img,
    //KA_img: KA_img,
  };

  return (
    <div className="Main_css">
      <label>
        <input type="radio" name="rd"value="AK_img"checked={selectedOption === "AK_img"} onChange={handleOptionChange}/>카양겔|
        <input type="radio" name="rd"value="AH_img"checked={selectedOption === "AH_img"} onChange={handleOptionChange}/>혼돈의 상아탑<br/>
        <input type="radio" name="rd"value="RB_img"checked={selectedOption === "RB_img"} onChange={handleOptionChange}/>발탄|
        <input type="radio" name="rd"value="RV_img"checked={selectedOption === "RV_img"} onChange={handleOptionChange}/>비아키스|
        <input type="radio" name="rd"value="RK_img"checked={selectedOption === "RK_img"} onChange={handleOptionChange}/>쿠크세이튼|
        <input type="radio" name="rd"value="RA_img"checked={selectedOption === "RA_img"} onChange={handleOptionChange}/>아브렐슈드|
        <input type="radio" name="rd"value="RI_img"checked={selectedOption === "RI_img"} onChange={handleOptionChange}/>일리아칸|
        <input type="radio" name="rd"value="RMN_img"checked={selectedOption === "RMN_img"} onChange={handleOptionChange}/>노멘
        <input type="radio" name="rd"value="RMH_img"checked={selectedOption === "RMH_img"} onChange={handleOptionChange}/>하멘<br/>
        <input type="radio" name="rd"value="KE_img"checked={selectedOption === "KE_img"} onChange={handleOptionChange}/>서막 에키드나|
        <input type="radio" name="rd"value="KB_img"checked={selectedOption === "KB_img"} onChange={handleOptionChange}/>1막 베히모스|
        <input type="radio" name="rd"value="KA_img"checked={selectedOption === "zz"} onChange={handleOptionChange}/>2막 아브렐슈드
      </label>
      {selectedOption && (
        <div>
          <h3>Selected Image:</h3>
          <img
            src={imageMap[selectedOption]}
            alt={selectedOption}
          />
        </div>
      )}
    </div>
  );
};

export default Cunning;
