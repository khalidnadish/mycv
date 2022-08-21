import { useContext ,useEffect} from "react";
import React from 'react'
import {title,header,title1,promise} from "../helper/en"
import { Typography } from '@mui/material'
import { ProfileDetail } from "../helper/context";
function Aboutme() {
  
  // useEffect(() => {
  //   import(`./${bird}.json`).then(data => setInitial(data));
  //   import(`./${bird}_hover_on.json`).then(data => setHoverOn(data));
  //   import(`./${bird}_hover_off.json`).then(data => setHoverOff(data));
  // }, []);

  const { activeLang } = useContext(ProfileDetail);
  return (
    <>
      <Typography
        variant="h2"
        sx={{ textAlign: activeLang ?  "right" : "left"  }}
        pl={2}
        // mt={2}
      >
        {header} 
        
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: activeLang ? "right" : "left" }}
        pl={2}
        mt={2}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: activeLang ? "right" : "left" }}
        pl={2}
        mt={2}
      >
        {title1}
      </Typography>
      <Typography
        variant="subtitle1"
        color={"warning.light"}
        sx={{ textAlign: activeLang ? "center" : "center" }}
        pl={2}
        mt={2}
      >
        {promise}
      </Typography>
    </>
  );
}

export default Aboutme