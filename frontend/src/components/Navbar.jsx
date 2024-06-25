import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LaunchIcon from "@mui/icons-material/Launch";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleMenuClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        <div className="left">
          <img src={require("../Images/LOGO_NEW.png")} alt="Website Logo" />
        </div>

        <div className="right">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a
                href="https://yashrajsinghwebverse.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="mailto:yashrajsingh282@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <EmailOutlinedIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yashrajsingh282/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/imyashrajsingh"
                target="_blank"
                rel="noreferrer"
              >
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/beingyashraj282/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Responsive Nav */}

      <div className="navbar">
        <div className="left">
          <img src={require("../Images/LOGO_NEW.png")} alt="Website Logo" />
        </div>
        <div className="right" onClick={handleMenuClick}>
          <MenuIcon style={{ fontSize: "2rem" }} />
        </div>
        {nav && (
          <div className="nav-menu">
            <ul>
              <li>
                <a href="/">
                  <HomeIcon /> <span>HOME</span>
                </a>
              </li>
              <li>
                <a
                  href="https://yashrajsinghwebverse.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LaunchIcon />
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a
                  href="mailto:yashrajsingh282@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <EmailOutlinedIcon /> EMAIL
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yashrajsingh282/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon /> LINKEDIN
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/imyashrajsingh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <XIcon /> TWITTER
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/beingyashraj282/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon /> FACEBOOK
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
