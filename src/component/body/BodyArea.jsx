import { useContext } from "react";
import { ProfileDetail } from "../../helper/context";
import { Box } from "@mui/material";
import TopRight, { BodyContainer } from "./TopRight";
import { Footer } from "../footer/Footer";

export const BodyArea = ({ xcolor = "error.main" }) => {
  const { activeColor,activeLink} = useContext(ProfileDetail);
  xcolor = activeColor;
  const Backcontentara = {
    height: "89%",
    position: "relative",
    backgroundColor: xcolor,
  };

  return (
    <>
      <Box sx={Backcontentara}>
          {/* {activeLink} */}
        <BodyContainer linkx={activeLink}>
          {/* <TopRight /> */}
        </BodyContainer>
        {/* <div className="contentara_aree"></div> */}
      </Box>
      <div className="footarea">
        <Footer />
      </div>
    </>
  );
};
