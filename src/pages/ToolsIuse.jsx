import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

import { Typography } from "@mui/material";
import ps from "../assets/1x/ps.png";
import ai from "../assets/1x/ai.png";
import pr from "../assets/1x/pr.png";
import ae from "../assets/1x/ae.png";

import html from "../assets/1x/HTML.png";
import css from "../assets/1x/CSS.png";
import js from "../assets/1x/Js.png";
import flask from "../assets/1x/flask.png";
import paython from "../assets/1x/python-48.png";
import rc from "../assets/1x/react.png";
import njs from "../assets/1x/nodejs.png";

import msql from "../assets/1x/mysql-logo-48.png";
import fire from "../assets/1x/firebase-48.png";

import xd from "../assets/1x/xd.png";
import figma from "../assets/1x/figma.png";


const styleDvider = {
  textAlign: "right",
};

export default function ToolsIuse() {
 
  return (
    <>
    <Typography variant='h3' textAlign="left" pl={2} mt={0}>
       Experince
        </Typography>
      <Grid
        container
        spacing={2}
        justify="center"
        pl={2}
        pr={2}
        
      >
        <Grid item ml={"0px"} align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left" sx={styleDvider}>
            <Typography>Desinging & Motion</Typography>
          </Divider>
          <br />

          <InputSlider
            skill={"phtoshp"}
            value={"60"}
            icon={ps}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"75"}
            icon={ai}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"40"}
            icon={pr}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"55"}
            icon={ae}
          />
        </Grid>

        <Grid item align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left">
            <Typography> P.Lang & FrameWork </Typography>
          </Divider>
          <br />
          <InputSlider
            skill={"Illastrato"}
            value={"80"}
            icon={html}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"75"}
            icon={css}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"60"}
            icon={js}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"75"}
            icon={rc}
          />
           <InputSlider
            skill={"Illastrato"}
            value={"47"}
            icon={njs}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"47"}
            icon={paython}
          />

          <InputSlider
            skill={"Illastrato"}
            value={"40"}
            icon={flask}
          />
          
        </Grid>

        <Grid item align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left">
            <Typography>DataBase</Typography>
          </Divider>
          <br />
          <InputSlider
            skill={"Illastrato"}
            value={"85"}
            icon={msql}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"50"}
            icon={fire}
          />
          <br />
          <Divider textAlign="left">
            <Typography>UI & UX</Typography>
          </Divider>
          <br />
          <InputSlider
            skill={"Illastrato"}
            value={"80"}
            icon={xd}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"70"}
            icon={figma}
          />
        </Grid>
      </Grid>
    </>
  );
}

const InputSlider = ({ skill, value, icon }) => {
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  return (
    // <Box sx={{ width: 250 }}>

    <Grid container spacing={2} alignItems="center">
      <Grid item xs={2} sm={2} md={2}>
        <Avatar alt="Remy Sharp" src={icon} sx={{ width: 24, height: 24 }} />

        {/* <Typography variant='H9'  > {skill}  </Typography> */}
      </Grid>
      <Grid item xs={10} sm={10} md={10}>
        <Slider
          value={value}
          size="small"
          aria-labelledby="input-slider"
          // marks={marks}
          // defaultValue={80}
          // disabled

          valueLabelDisplay="auto"
          color="secondary"
        />
      </Grid>
    </Grid>
    // </Box>
  );
};
 



