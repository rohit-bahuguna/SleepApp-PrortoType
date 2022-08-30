import React , {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"

import  {Tick , NextButton}  from '../Icons/Icons';

function Fourthpage() {
  const [button1, setbutton1] = useState(false)
  const [button2, setbutton2] = useState(false)
  const [button3, setbutton3] = useState(false)

  const button1Handler = () => {
    setbutton1(!button1)
  }
  const button2Handler = () => {
    setbutton2(!button2)
  }
  const button3Handler = () => {
    setbutton3(!button3)
  }


  const PageData = useContext(dataContext);
  let appData = PageData.fourthPage
  return (
    <div className="flex items-center h-screen flex-col gap-2 place-items-center p-20">
      {
        appData ? <>
          <>
            
            <h3>{appData.message1}</h3>
            <p>{appData.message2}</p>
            <div className="flex items-center  text-white flex-col gap-3 place-items-center p-8">
              <button className='rounded-lg  flex  text-black bg-blue-500 px-4 py-2 '
                onClick={button1Handler}>
                <span className='text-xs  text-black'> {appData.buttonText.text1} </span>
                {button1 ? <Tick /> : ""}
              </button>
              <button className='rounded-lg flex   text-black px-4 py-2 click:bg-blue-500 bg-blue-500   ' onClick={button2Handler}>
                <span className='text-xs  text-black'>{appData.buttonText.text2}</span>
                {button2 ? <Tick /> : ""}
              </button>
              <button className='rounded-lg flex   text-black  px-4 py-2 bg-blue-500   ' onClick={button3Handler}>
                <span className='text-xs  text-black'>{appData.buttonText.text3}</span>
                {button3 ? <Tick /> : ""}
              </button>
            </div>

          </>
       </> : "Loading"
      }
    
      <Link to="/fifthpage"> <NextButton/> </Link>
    </div>
  )
}

export default Fourthpage