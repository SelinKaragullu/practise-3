import Square from "./Square"
import {useState} from "react"


export default function TicTacToe () {
    const [board,setBoard] = useState(Array(9).fill(""))
    const [turn,setTurn] = useState("X")
  

    function handleClick (index) {
const cpyBoard = [...board]
if(cpyBoard[index] !== "") return 
cpyBoard[index] = turn
setBoard(cpyBoard)
setTurn(turn==="X" ? "O" : "X")
    }


    function getWinner(squares) {
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yatay
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikey
        [0, 4, 8], [2, 4, 6]             // Çapraz
    ]

    // BURAYI SEN DOLDUR: 
    // Bir for döngüsü ile bu winningPatterns dizisini dön.
    // Eğer squares[a], squares[b] ve squares[c] birbirine eşitse ve boş değilse, kazananı (squares[a]) döndür (return et).
    // Döngü biterse ve kimse kazanmamışsa 'null' döndür.
}

    return <div>
<div><Square onClick={()=>{handleClick(0)}} value={board[0]} /><Square onClick={()=>{handleClick(1)}} value={board[1]}/><Square onClick={()=>{handleClick(2)}} value={board[2]} /></div>
<div><Square onClick={()=>{handleClick(3)}} value={board[3]}/><Square onClick={()=>{handleClick(4)}} value={board[4]} /><Square onClick={()=>{handleClick(5)}} value={board[5]} /></div>
<div><Square onClick={()=>{handleClick(6)}} value={board[6]} /><Square onClick={()=>{handleClick(7)}} value={board[7]} /><Square onClick={()=>{handleClick(8)}} value={board[8]} /></div>
    </div>
}