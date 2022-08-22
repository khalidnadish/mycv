import React,{useEffect} from 'react'
import Box from '@mui/material/Box'
import { Link,Outlet,useNavigate } from "react-router-dom";
import Aboutme from '../../pages/Aboutme';
import Exp from '../../pages/Exp';
import LiveCalender from '../../pages/LiveCalender';
import WorkGallery from '../../pages/WorkGallery';
import Hireme from '../../pages/Hireme';
import Sendme from '../../pages/Sendme';
import Paypal from '../../pages/Paypal';
import ToolsIuse from '../../pages/ToolsIuse';
function TopRight() {
  return (
    <Box sx={{
        bgcolor:"error.main",

        zIndex:"0"
    }}>sdsfsdfsdf</Box>
  )
}

export default TopRight

const stylecontanier={
   


}

export const BodyContainer=({data,linkx}) => {
  const navigate=useNavigate()
  // useEffect(() => {
     
  //   navigate(linkx)
  //   console.log(linkx)
    
  // }, [linkx])
  

    return (
      <>
      {/* <Outlet/> */}
      <Box sx={ { height: "98%",
      width: "99%",
      position: "absolute",
      top:0,
      border: "1px solid ",
      borderColor:"primary.main",
      // borderRadius: "0px 100px  0px 0px",
      backgroundColor: "background.paper",
      backgroundImage:'url("/src/assets/bg.png")' ,
      overflow:'auto'

      
      // backgroundColor: "rgb(240, 240, 200)"
    }}
      >
       {linkx === "/aboutme" && <Aboutme/>}
       {/* {linkx === "/exp" && <Exp/>} */}
       {linkx === "/exp" &&  <ToolsIuse/>}
       {linkx === "/live" && <LiveCalender/>}
       {linkx === "/work" && <WorkGallery/>}
       {linkx === "/hire" && <Hireme/>}
       {linkx === "/sendme" && <Sendme/>}
       {linkx === "/paypal" && <Paypal/>}
      
        
      
      </Box>
      </>
    )
  }
  
   