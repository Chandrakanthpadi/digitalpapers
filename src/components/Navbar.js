import React, { useEffect, useState } from "react";
import "../styles/components/navbar.css";
import logo from "../assets/Digital Papers Logo.svg";
import inboxIcon from "../assets/inbox.svg";
import folderIcon from "../assets/folder.svg";

function Navbar({ dispatch, currentTab }) {
  const [tabSelected, setTabSelected] = useState(currentTab);
  const [inboxClassName, setInboxClassName] = useState(currentTab === "Inbox");
  const [folderClassName, setFolderClassName] = useState(
    currentTab === "Folder"
  );
  useEffect(() => {
    if (currentTab.tab === "tab") {
      setInboxClassName(false);
      setFolderClassName(false);
    }
  }, [currentTab]);

  function makeActive(tabName) {
    switch (tabName) {
      case "Inbox":
        {
          setInboxClassName((prev) => !prev);
          setFolderClassName((prev) => {
            if (prev) return !prev;
          });
          dispatch({ tab: "Inbox" });
        }
        break;
      case "Folder":
        {
          setFolderClassName((prev) => !prev);
          setInboxClassName((prev) => {
            if (prev) return !prev;
          });
          dispatch({ tab: "Folder" });
        }
        break;
    }
  }

  return (
    <nav>
      <div className="brand">
        <img src={logo} alt="" className="logodisplay" />
        <div>Digital Papers</div>
      </div>
      <div className="wrap">
        {/* <input className="search" placeholder="Search documents"></input> */}
        <button
          className={inboxClassName ? "icon active" : "icon"}
          onClick={() => {
            makeActive("Inbox");
          }}
        >
          <img src={inboxIcon} alt="" className="logo" />
          <div className="action-text">Inbox</div>
        </button>
        <button
          className={folderClassName ? "icon active" : "icon"}
          onClick={() => {
            makeActive("Folder");
          }}
        >
          <img src={folderIcon} alt="" className="logo" />
          <div className="action-text">Folders</div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
