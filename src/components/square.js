import React from "react"; 

const Square = ({value, onclick}) =>{
  const style = value ? `square ${value}` :`square`;

   return(
    <button className={style} onclick ={onclick}>
      {value}  
    </button>
    )
} 

export default Square;