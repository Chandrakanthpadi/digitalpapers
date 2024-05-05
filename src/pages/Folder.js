import React, { useState } from "react";
import "../styles/components/folder.css";

function Folder({ folder }) {
  const [data, setData] = useState([
    { link: "ssclink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
    { link: "interlink" },
  ]);

  return (
    <div className="selected-folder">
      {folder}
      <div className="card-out">
        <div className="card-wrapper">
          {data.map((item) => {
            return <div className="card">{item.link}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Folder;
