import React from "react";
import "../styles/components/folder.css";

function FolderBar({ dispatch, setFolder }) {
  function performTabSelection(folderSelected) {
    setFolder(folderSelected);
    dispatch({ tab: "tab" });
  }

  return (
    <div>
      <div
        onClick={() => {
          performTabSelection("Education");
        }}
        className="foldertab"
      >
        Education
      </div>
      <div
        onClick={() => {
          performTabSelection("Medical");
        }}
        className="foldertab"
      >
        Medical Reocrds
      </div>
      <div
        onClick={() => {
          performTabSelection("Work");
        }}
        className="foldertab"
      >
        Work
      </div>
      <div
        onClick={() => {
          performTabSelection("Receipts");
        }}
        className="foldertab"
      >
        Receipts
      </div>
    </div>
  );
}

export default FolderBar;
