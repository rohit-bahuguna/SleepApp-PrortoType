import React , {useContext} from 'react'
import {dataContext} from  "../App"

const FirstPage = () => {
  const PageData = useContext(dataContext);
  let appData = PageData.firstPage

console.log()
  return (
    <div>
      {appData ? <>
        <h1>{appData.Greeting_message} <span>{appData.name}</span></h1>
      <h5>{ appData.message}</h5>
      </> : "Loading"}
    </div>
  )
}

export default FirstPage