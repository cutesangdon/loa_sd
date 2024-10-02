import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main";
import Login from "./login";
import Header from "./header";
import Cunning from "./cunning";
import Clear from "./clear";
import Build from "./build";
import Help from "./help";
import Footer from "./footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<><Header /><Main /><Footer /></>}/>
          <Route path="/build" element={<><Header /><Build /><Footer /></>}/>
          <Route path="/cunning" element={<><Header /><Cunning /><Footer /></>}/>
          <Route path="/clear" element={<><Header /><Clear /><Footer /></>}/>          
          <Route path="/help" element={<><Header /><Help /><Footer /></>}/>
        </Routes>
      </Router>
    </div>
  );
}