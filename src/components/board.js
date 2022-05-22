import React from "react"; 
import Square from "./square"; 

const Board = ({Square,onClick}) =>(
    <div className="board">
        {squares.map((square,i)=>(
            <square key={i} value={square} onClick={() => onClick(i)}/>        
            ))}
    </div>
); 

export default Board;