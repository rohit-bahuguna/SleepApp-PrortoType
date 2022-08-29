import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
 import {dataContext} from "../App"
function SeventhPage() {
 
const PageData = useContext(dataContext);
  let appData = PageData.seventhPage
  return (
    <div>
      {
        appData ? <div>
          <h2>{appData.message1}</h2>
          
        </div> : "Loading"
      }
    <Link to="/eighthpage"><button>EighthPage </button></Link>
    </div>
  )
}

export default SeventhPage