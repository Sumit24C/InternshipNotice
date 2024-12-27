import React from "react";
import "./Sidebar.css";
import logo from "./tcet.png";
// Import FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-header">
        <img src={logo} alt="tcet-logo" />
        <h3>TCET - TNP</h3> 
      </div>

      <ul className="sidebar-menu">
        <li>Placement</li>
        <li>Placement Statistics</li>
        <li>Comparative Placement Statistics</li>
        <li>Notice Creation</li>
        <li>PLI Consent</li>
        <li>One Page Report</li>
      </ul>

      <div className="sidebar-footer">
        <FontAwesomeIcon className="user" icon={faUser} style={{ color: "#ffea00", fontSize: "1.5rem" }} />
        <FontAwesomeIcon className="sign-in" icon={faRightToBracket} style={{ color: "#ffffff", fontSize: "1.5rem", marginLeft: "1rem" }} />
      </div>
    </div>
  );
};

export default Dashboard;
