import React,{useStae} from "react";
import {calculateWinner } from "../helper";
import Board from "./board"; 

const Game=() =>{
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const [setNumber, setStepNumber ] = useState(0);
   const [xIsNext,setXisNext] = useState(true);
   const winner = 
}   