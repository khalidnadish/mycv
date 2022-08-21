import { useState, useContext } from "react";
import "./styles.css";
// import { ProfileDetail } from "./helper/context";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { SidebarArea } from "./component/sidebar/SidebarArea";
import { BodyArea } from "./component/body/BodyArea";
import { Coner } from "./component/corner/Coner";
import Aboutme from  "./pages/Aboutme"

function App() {
  return (
    <>
    {/* <HomePage/> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/exper" element={<HomePage />} />
        <Route path="/lifecalender" element={<HomePage />} />
        <Route path="/workgallary" element={<HomePage />} />
        <Route path="/hireme" element={<HomePage />} />
        <Route path="/consaltent" element={<HomePage />} />
        <Route path="/donateme" element={<HomePage />} />
       
        {/* <Route path="*" element={<ErrorPage />} />  */}
      </Routes>
     
    </>
  );
}



export default App;


const HomePage=()=>{
return(
<>
<Container fixed sx={{ postion: "relative" }}>
<Coner />
        <div className="container">
          <div className="sidebar">
            <SidebarArea />
          </div>
          <div className="bodyarea">
            <BodyArea />
          </div>
        </div>
        </Container>

</>


)


}