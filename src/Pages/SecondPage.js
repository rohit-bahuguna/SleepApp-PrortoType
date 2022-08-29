import React , {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";

function SecondPage() {
  const [input, setInput] = useState();
  const PageData = useContext(dataContext);
  let appData = PageData.SecondPage
   
  return (
    
    <div className="flex items-center h-screen text-textColor flex-col gap-3 place-items-center p-20">
      
      { appData ?
        <>
          <h1 className="  text-xl font-sans text-white" >{PageData.firstPage.Greeting_message } <span className="font-extrabold font-sans text-[#80B3CB] " >{ PageData.firstPage.name}</span></h1>
          <div><p className="  font-sans text-white text-center" > {appData.message.split(",")[0]},</p>
          <p className=" font-sans text-white m-0"  > {appData.message.split(",")[1]}</p></div>
          <input type="text" placeholder='Choose a nickname' value={input} onChange={(e) => setInput(e.target.value) } />
          <p className="  text-xs font-sans text-white" >{appData.terms_message} </p>
    {input ? <Link to="/thirdpage"> <BsArrowDownCircleFill style={{ color: 'yellow' }} />  </Link> : ""}
        </> : "Loading"
      }
      
    </div>
  )
}

export default SecondPage