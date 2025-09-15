import { use, useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle = () =>{
        const newRuns = runs + 1;
        setRuns(newRuns);
    }
    
    const handleSix = () =>{
        const newRuns = runs + 6;
        setRuns(newRuns);
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
    }
    const handleFour = () =>{
        const newRuns = runs + 4;
        setRuns(newRuns);
    }
    return (
        <div>
            <h3>Player: Bangladeshi</h3>
            {runs > 50 && <p>Your score 50</p>}
            <h1>Score: {runs} </h1>
            <p>six: {sixes}</p>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}