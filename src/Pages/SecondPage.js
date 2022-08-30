import React , {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";
import {NextButton } from "../Icons/Icons"
function SecondPage() {
  const [input, setInput] = useState();
  const PageData = useContext(dataContext);
  let appData = PageData.SecondPage
   
  return (
    
    <div className="flex items-center h-screen text-textColor flex-col gap-3 place-items-center p-20">
      
      { appData ?
        <>
          <h1 className="  text-xl font-sans text-white" >{PageData.firstPage.Greeting_message} <span className="font-extrabold font-sans text-[#80B3CB] " >{PageData.firstPage.name}</span></h1>
          
          <div><p className="  font-sans text-white text-center" >
            {appData.message.split(",")[0]},
          </p>
            <p className=" font-sans text-white m-0"  > {appData.message.split(",")[1]}</p>
          </div>
          <div className='bg-white flex rounded-full justify-center flex-row  min-h-12 min-w-10'>
       <input type="text" className='outline-none border-none  rounded-full min-h-12 min-w-10'  value={input} onChange={(e) => setInput(e.target.value)} />  {input ? <Link to="/thirdpage"> <NextButton/> </Link> : ""} </div>
          
          <p className="  text-xs font-sans text-white" >{appData.terms_message} </p>
    
        </> : "Loading"
      }
      
    </div>
  )
}

export default SecondPage