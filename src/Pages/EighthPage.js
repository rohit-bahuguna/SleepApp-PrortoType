import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";
import {NextButton } from "../Icons/Icons"
 const EighthPage = () => {
const PageData = useContext(dataContext);
  let appData = PageData.eightthPage
   
  return (
    <div>
       {
        appData ? <div>
          <h3>{appData.message1}</h3>
          <h2>{appData.message2}</h2>
          
        </div> : "Loading"
      }
    <Link to="/ninethpage"> <NextButton/>  </Link>
    </div>
  )
}
export default EighthPage