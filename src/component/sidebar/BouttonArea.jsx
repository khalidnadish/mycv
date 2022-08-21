import { useContext } from "react";
import { Link,Outlet,useNavigate } from "react-router-dom";
import { ProfileDetail } from "../../helper/context";
import Btn from "../Btn";
import { FaChartLine } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";

export const BouttonArea = () => {
 
  
  const {
    setBlueSize,
    setResSize,
    setorangeSize,
    setgreenSize,
    activeColor,
    setActiveColor,
    setActiveLink,
  } = useContext(ProfileDetail);

  const MouseEnter = (flag) => {
    switch (flag) {
      case "blue":
        setBlueSize((pre) => "70%");
        setResSize((pre) => "30%");
        setorangeSize((pre) => "30%");
        setgreenSize((pre) => "30%");
        break;
      case "red":
        setBlueSize((pre) => "30%");
        setResSize((pre) => "70%");
        setorangeSize((pre) => "30%");
        setgreenSize((pre) => "30%");
        break;
      case "orange":
        setBlueSize((pre) => "30%");
        setResSize((pre) => "30%");
        setorangeSize((pre) => "70%");
        setgreenSize((pre) => "30%");
        break;
      case "green":
        setBlueSize((pre) => "30%");
        setResSize((pre) => "30%");
        setorangeSize((pre) => "30%");
        setgreenSize((pre) => "70%");
        break;

      default:
        break;
    }

    // console.log(blueSize, redSize, orangeSize, greenSize);
  };

  const handleOnclick = (flag) => {
    switch (flag) {
      case "blue":
        setActiveColor((pre) => "primary.main");
        setActiveLink("/aboutme")
        
        break;
      case "red":
        setActiveColor((pre) => "error.main");
        setActiveLink("/exp")
        break;
      case "orange":
        setActiveColor((pre) => "warning.main");
        setActiveLink("/live")
        break;
      case "green":
        setActiveColor((pre) => "success.main");
        setActiveLink("/work")
        break;
      default:
        break;
    }
    console.log(activeColor);
  };

  return (
    <>
      <div className="about_btn" onMouseEnter={() => MouseEnter("blue")}>
        {/* <Link to="/aboutme"> */}
        
          <Btn
            title={"about me"}
            xcolor={"primary.main"}
            onclick={() => handleOnclick("blue")}
            xicon={<SiAboutdotme color={"white"} />}
          />
        {/* </Link> */}
        {/* <Outlet/> */}
      </div>
      <div className="exp_btn" onMouseEnter={() => MouseEnter("red")}>
        <Btn
          title={"experince"}
          xcolor={"error.main"}
          onclick={() => handleOnclick("red")}
          xicon={<FaChartLine color={"white"} />}
        />
      </div>

      <div className="live_btn" onMouseEnter={() => MouseEnter("orange")}>
        <Btn
          title={"life calender"}
          xcolor={"warning.main"}
          onclick={() => handleOnclick("orange")}
          xicon={<BsFillCalendarCheckFill color={"white"} />}
        />
      </div>
      <div className="gallery_btn" onMouseEnter={() => MouseEnter("green")}>
        <Btn
          title={"work gallary"}
          xcolor={"success.main"}
          onclick={() => handleOnclick("green")}
          xicon={<RiGalleryLine color={"white"} />}
        />
      </div>
      <div className="contact_btn">
        <Btn
          title={"hire me"}
          xcolor={"secondary.light"}
          xicon={<MdWorkOutline color={"white"} />}
          onclick={() =>  setActiveLink("/hire")}
        />
      </div>
    </>
  );
};
