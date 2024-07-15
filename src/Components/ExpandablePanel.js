import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ExpandablePanel = ({MenuTitle,MenuItems}) => {
  const [expanded, setExpanded] = useState(false);

  const ExpandPanel=()=>{
    setExpanded(!expanded);
  }

  return (
    <div className=" w-full  ">
      <div className="border-b p-4 flex justify-between items-center cursor-pointer" onClick={ExpandPanel}>
        <p>{MenuTitle}</p>
        <i
          className={expanded ? "fa-solid fa-angle-down" : "fa-solid fa-angle-left"}
        ></i>
      </div>
      {expanded ? (
        <ul className="pl-4 text-gray-500">
          {
            MenuItems.map((i)=>{
               return <li key={i} className="p-4">
                <NavLink to={"/admin/"+MenuTitle.toLowerCase()+"/"+i.toLowerCase()}>{i}</NavLink>
               </li>
            })
          }
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExpandablePanel;
