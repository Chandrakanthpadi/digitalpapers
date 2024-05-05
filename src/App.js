import { useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import "./styles/components/app.css";
import FolderBar from "./components/FolderBar";
import Folder from "./pages/Folder";

function App() {
  const [inboxClassName, setInboxClassName] = useState("sidebar");
  const [folderClassName, setFolderClassName] = useState("sidebar");
  const [folder, setFolder] = useState();

  const sidebarClick = (currentTab, action) => {
    switch (action.tab) {
      case "Inbox":
        {
          if (inboxClassName.includes("active")) setInboxClassName("");
          else setInboxClassName("active");
          if (folderClassName.includes("active")) setFolderClassName("");
        }
        break;
      case "Folder":
        {
          if (folderClassName.includes("active")) setFolderClassName("");
          else setFolderClassName("active");
          if (inboxClassName.includes("active")) setInboxClassName("");
        }
        break;
      case "tab":
        {
          if (folderClassName.includes("active")) setFolderClassName("");
          if (inboxClassName.includes("active")) setInboxClassName("");
        }
        break;
    }
    return { tab: action.tab };
  };

  const [currentTab, dispatch] = useReducer(sidebarClick, {
    tab: "",
  });

  return (
    <div className="App">
      <Navbar dispatch={dispatch} currentTab={currentTab} />
      <div className="sidebar-container">
        <SideBar className={"sidebar inbox " + inboxClassName}>Inbox</SideBar>
        <SideBar className={"sidebar folder " + folderClassName}>
          <FolderBar dispatch={dispatch} setFolder={setFolder} />
        </SideBar>
        <Folder folder={folder} />
      </div>
    </div>
  );
}

export default App;
