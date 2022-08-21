import React from 'react'
import {title,experts,l1,l2,l3,l4,l5} from "../helper/en"
import { Typography } from '@mui/material'
function LiveCalender() {
  return (
    <>
      <Typography variant="h2" textAlign="left" pl={2} mt={2}>
        LiveCalender
      </Typography>

      <Typography
        variant="body1"
        textAlign="left"
        color="primary.main"
        pl={2}
        mt={2}
      >
        <li>1998-2005</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l1}
      </Typography>

      <Typography
        variant="body1"
        textAlign="left"
        color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2006-2008</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l2}
      </Typography>

      <Typography
        variant="body1"
        textAlign="left"
        color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2009-2010</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l3}
      </Typography>

      <Typography
        variant="body1"
        textAlign="left"
        color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2011-2014</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l4}
      </Typography>
      <Typography
        variant="body1"
        textAlign="left"
        color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2015-till Now </li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l5}
      </Typography>
    </>
  );
}

export default LiveCalender