import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
 import { BsArrowDownCircleFill } from "react-icons/bs";
import {NextButton } from "../Icons/Icons"
function SeventhPage() {
 
const PageData = useContext(dataContext);
  let appData = PageData.seventhPage
  return (
    <div  className="flex items-center h-screen flex-col gap-8 place-items-center p-20">
      {
        appData ? <>
          <h2>{appData.message1}</h2>
          
        </> : "Loading"
      }
   <Link to="/eighthpage"> <NextButton/>  </Link>
    </div>
  )
}

export default SeventhPage