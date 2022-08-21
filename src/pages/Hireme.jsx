import React from 'react'
import {title,experts} from "../helper/en"
import { Typography } from '@mui/material'
function Hireme() {
  return (
    <>
      <Typography variant="h1" textAlign="left" pl={2} mt={2}>
      Hireme
      </Typography>
      <Typography variant="body1" textAlign="left" pl={2} mt={2}>
        {experts}
      </Typography>
    </>
  );
}

export default Hireme