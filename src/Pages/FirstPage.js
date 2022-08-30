
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { dataContext } from "../App";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { NextButton } from "../Icons/Icons";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/x-date-pickers' 

const FirstPage = () => {
  const PageData = useContext(dataContext);
  let appData = PageData.firstPage;

  console.log();
  return (
    <div className="flex items-center h-screen text-textColor flex-col  place-items-center p-20">
      
      {appData ? (
        <>
          
          <h1 className=" text-xl font-sans text-white">
            {appData.Greeting_message}{" "}
            <span className="font-extrabold font-sans text-[#80B3CB] ">
              {appData.name}
            </span>
            
          </h1>
          <h5 className="font-sans text-xs text-white">
            {appData.message}
          </h5>
         
          <Link to="/secondpage"> <NextButton/>  </Link>
        </>
      ) : (
        "Loading"
      )}
    </div>
    
   
  );
};

export default FirstPage;