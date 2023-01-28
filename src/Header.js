import React from 'react'
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person"
import WhatShot from "@mui/icons-material/Whatshot";
import Message from "@mui/icons-material/QuestionAnswer";


import IconButton from '@mui/material/IconButton'

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <WhatShot
        fontSize="large"
        className="header__icon"
        style={{ color: "red" }}
      />
      <IconButton>
        <Message
          fontSize="large"
          className="header_icon"
        //   style={{ color: "#e1a926" }}
        />
      </IconButton>
    </div>
  );
}

export default Header