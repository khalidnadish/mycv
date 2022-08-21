import { useContext } from "react";
import { ArrowShow } from "../arrowBox/ArrowShow";
import { BouttonArea } from "./BouttonArea";
import me from "../../assets/me-transpernt.png";
import { Box } from "@mui/material";
import { ProfileDetail } from "../../helper/context";

export const SidebarArea = () => {
  const { activeColor } = useContext(ProfileDetail);
  const img__area = {
    position: "relative",
    height: "20%",
    width: "100%",
    backgroundColor: activeColor,
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "20%",
          width: "100%",
          backgroundColor:activeColor,
        }}
      >
        <img src={me} alt="" className="img__area_cont" />
      </Box>
      <div className="button__area">
        <BouttonArea />
      </div>
      <div className="arow__area">
        <ArrowShow />
      </div>
    </>
  );
};
