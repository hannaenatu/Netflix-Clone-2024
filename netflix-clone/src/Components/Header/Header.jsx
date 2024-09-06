import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import netflixLogo from "../../assets/image/netflixLogo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={netflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>{"netflixLogo"}</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Letest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />{" "}
            </li>
            <li>
              <NotificationsNoneIcon /> {""}
            </li>
            <li><AccountBoxIcon/>{""}</li>
            <li><ArrowDropDownIcon/></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
