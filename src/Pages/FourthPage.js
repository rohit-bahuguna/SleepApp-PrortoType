import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"

function Fourthpage() {
  const PageData = useContext(dataContext);
  let appData = PageData.fourthPage
  return (
    <div>
      {
        appData ? <>
          <div>
            <h3>{appData.message1}</h3>
            <p>{appData.message2}</p>
            <div>
              <button>{ appData.buttonText.text1}</button>
              <button>{ appData.buttonText.text2}</button>
              <button>{ appData.buttonText.text3}</button>
            </div>

          </div>
       </> : "Loading"
      }
    
      <Link to="/fifthpage"><button>fifthpage </button></Link>
    </div>
  )
}

export default Fourthpage