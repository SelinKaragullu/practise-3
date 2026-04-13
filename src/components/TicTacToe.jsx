import Square from "./Square"
import {useState} from "react"


export default function TicTacToe () {
    const [board,setBoard] = useState(Array(9).fill(""))
    const [turn,setTurn] = useState("X")
  

    return <div>
<div><Square onClick={()=>{}} value={board[0]} /><Square onClick={()=>{}} value={board[1]}/><Square onClick={()=>{}} value={board[2]} /></div>
<div><Square onClick={()=>{}} value={board[3]}/><Square onClick={()=>{}} value={board[4]} /><Square onClick={()=>{}} value={board[5]} /></div>
<div><Square onClick={()=>{}} value={board[6]} /><Square onClick={()=>{}} value={board[7]} /><Square onClick={()=>{}} value={board[8]} /></div>
    </div>
}