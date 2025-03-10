import React from "react";
import { Link } from "react-router-dom";
const Card = ({ logo, groups, type }) => {
  return (
    <>
      <div className=" bg-transparent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#b7a089,0_0_15px_#b7a089,0_0_15px_#b7a089] h-[20rem] w-[20rem] flex flex-col items-center justify-around border-0">
        <img src={logo} className="h-22" />
        {groups.map((e) => {
          if (e.group.split("-")[0] == type)
            return (
              <Link to={"scoreboard/" + e.group}>
                
                <button className="border-white border-2 bg-transparent hover:bg-[#66140f] w-[100%] transition-all text-white ">
                  
                  GROUP {e.group}
                </button>
              </Link>
            );
        })}
      </div>
    </>
  );
};

export default Card;
