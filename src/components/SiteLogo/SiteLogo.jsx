// SiteLogo.jsx
import React from "react";
import "./siteLogo.scss";
import chatsyLogo from "../../assets/chatsyLogo.png";

function SiteLogo({size = "medium"}) {
    return <img src={chatsyLogo} alt="Site Logo" className={`logo ${size}`} />;
}

export default SiteLogo;
