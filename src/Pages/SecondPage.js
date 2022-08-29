import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import {dataContext} from "../App"
function SecondPage() {
  const PageData = useContext(dataContext);
  let appData = PageData.SecondPage
  let massage = PageData.firstPage.Greeting_message + PageData.firstPage.name
  return (
    
    <div>
      
      { PageData ?
        <>
          <h1>{massage}</h1>
          <p>{appData.massage}</p>
          <input type="text" placeholder='Choose a nickname' />
          <p>{appData.terms_message} </p>
      <Link to="/thirdpage"><button>thirdpage </button></Link>
        </> : "Loading"
      }
      
    </div>
  )
}

export default SecondPage