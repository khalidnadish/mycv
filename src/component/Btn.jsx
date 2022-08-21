import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { IconName } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

function Btn({ title, xcolor = "inherit", onclick ,xicon}) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "25px",
            bgcolor: xcolor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pl:1,
            pr:1
          }}
        >
         {xicon}
          {/* <FiTwitter color="white" /> */}
        </Box>
        <Button

            variant="outlined"
          sx={{
            borderColor: xcolor,
            width: "100%",
            height: "100%",
            borderRadius: 0,
            textAlign: "left",
            // bgcolor:xcolor,
            // color:"background.paper"
          }}
          onClick={onclick}
        >
          <Typography sx={{
            visibility:{xs:"hidden",sm:"hidden",md:"visible"}
          }}>{title}</Typography>
        </Button>
      </Box>
    </>
  );
}

export default Btn;
