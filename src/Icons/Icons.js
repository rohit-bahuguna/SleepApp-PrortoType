import { TiTick } from "react-icons/ti"
 import { BsArrowRightCircleFill } from "react-icons/bs";
import React from "react"

const Tick = () => {
       
    return (
        
              <TiTick style={{
              color: "green",
              backgroundColor: "white",
              borderRadius: "50%",
              height: '10px',
              width:'10px'
            }}
            />
            
           

    )
} 

const NextButton = () => {
       
    return (
        
              <BsArrowRightCircleFill
        style={{ color: 'yellow' , height: '40px',
              width:'40px'}} /> 
            
           

    )
} 
  
   







export  {Tick , NextButton}