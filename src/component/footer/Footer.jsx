import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
      <div className="mail_div">
        <MdAlternateEmail />
      </div>
      <div className="whatsapp_div">
        <BsWhatsapp />
      </div>
      <div className="linkdn_div">
        <FaLinkedin />
      </div>
      <div className="facebook_div">
        <AiOutlineFacebook />
      </div>
      <div className="twter_div">
        <FiTwitter />
      </div>
    </>
  );
};
