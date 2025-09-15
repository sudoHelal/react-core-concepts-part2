import { useState } from "react"

export default function Bowler() {
    const blowerStyle = {
        border: '1px solid green',
    }
    const [wickets, setWickets] = useState(0);
    const handleWickets = () =>{
       const newWickets = wickets + 1;
       const newBalls =  balls + 1;
       setBalls(newBalls);
        setWickets(newWickets);
    }
    const [balls, setBalls] = useState(0);
    const handleSingleBall = () =>{
        const newBalls =  balls + 1;
        setBalls(newBalls);
    }
    return (
        <div style={blowerStyle}>
            <h1>Bowler</h1>
            <h2>Balls counter: {balls} </h2>
            <h2>Wickets counter {wickets}</h2>
            <button onClick={handleSingleBall}>Single ball</button>
            <button onClick={handleWickets}>Wickets</button>
        </div>
    )
}