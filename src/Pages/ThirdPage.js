import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";

function ThirdPage() {

  const PageData = useContext(dataContext);
  let appData = PageData.thirdPage

  return (
    <div>
      
      {
        appData ? <>
          <h4>{appData.message1}</h4>
          <h4>{ appData.message2}</h4>
        </> : "Loading"
      }


    <Link to="/fourthpage"> <BsArrowDownCircleFill style={{ color: 'yellow' }} />  </Link>
    </div>
  )
}

export default ThirdPage