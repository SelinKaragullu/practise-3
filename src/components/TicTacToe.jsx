import Square from "./Square"
import {useState} from "react"


export default function TicTacToe () {
    const [squares,setSquares] = useState(Array(9).fill(""))
    const [turn,setTurn] = useState("X")
  

    function handleClick (index) {
const cpySquares = [...squares]
if(cpySquares[index] !== "") return 
if(cpySquares[index] !== "" || getWinner(squares)) return
 cpySquares[index] = turn
setSquares(cpySquares)
setTurn(turn==="X" ? "O" : "X")
    }


    function getWinner(squares) {
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lateral
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6]             // Diagonal
    ]

    for(let i =0; i<winningPatterns.length; i++)

        {
const [a,b,c] = winningPatterns[i]
if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) return squares[a]
        }
    return null
}


function handleReset () {
     setTurn = ("X")
    setSquares(Array(9).fill(""))
}

const winner = getWinner(squares)
let status = ""
if(winner){status = "Winner" + winner}
else if(!squares.includes("")) {status = "Even"}
else {status = "Next player is " + turn}


    return <div>
<h1>{status}</h1>
<div><Square onClick={()=>{handleClick(0)}} value={squares[0]} /><Square onClick={()=>{handleClick(1)}} value={squares[1]}/><Square onClick={()=>{handleClick(2)}} value={squares[2]} /></div>
<div><Square onClick={()=>{handleClick(3)}} value={squares[3]}/><Square onClick={()=>{handleClick(4)}} value={squares[4]} /><Square onClick={()=>{handleClick(5)}} value={squares[5]} /></div>
<div><Square onClick={()=>{handleClick(6)}} value={squares[6]} /><Square onClick={()=>{handleClick(7)}} value={squares[7]} /><Square onClick={()=>{handleClick(8)}} value={squares[8]} /></div>

<button onClick={handleReset}>Replay</button>
    </div>
}