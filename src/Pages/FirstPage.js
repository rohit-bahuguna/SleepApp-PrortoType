import React , {useContext} from 'react'
import { Link } from 'react-router-dom';
import {dataContext} from  "../App"


const FirstPage = () => {
  const PageData = useContext(dataContext);
  let appData = PageData.firstPage

console.log()
  return (
    <div >
      {appData ? <>
        <h1 >{appData.Greeting_message} <span>{appData.name}</span></h1>
      <h5>{ appData.message}</h5>
      </> : "Loading"}

      <Link to="/secondpage"><button>second </button></Link>
    </div>
  )
}

export default FirstPage