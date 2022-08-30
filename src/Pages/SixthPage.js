import React , {useContext ,  useState} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";
import { NextButton } from "../Icons/Icons"
    import Time from "../utils/Clock";
import { StyledEngineProvider } from '@mui/material/styles';
import { NewTimePicker } from "../utils/Clock"

function SixthPage() {
  const [button1, setbutton1] = useState(false)
  const PageData = useContext(dataContext);
  let appData = PageData.sixthPage

  return (
    <div className="flex items-center h-screen flex-col gap-8 place-items-center p-20">
     
      {
        appData ? <>
          <h2>{appData.message1}</h2>
         
          {
            button1 ? <div className='text-white flex justify-center bg-white p-0 border-black rounded'><Time className=""/> </div> :   <button className='rounded-lg    text-black  px-4 py-2 bg-blue-500' onClick={() => setbutton1(!button1)} >{appData.text}</button>
          }
      
 
        </> : "Loading"
      }
   <Link to="/seventhpage"> <NextButton/>  </Link>
    </div>
  )
}

export default SixthPage;