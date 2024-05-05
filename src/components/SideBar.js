import React from "react";
import "../styles/components/sidebar.css";

function SideBar({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default SideBar;
