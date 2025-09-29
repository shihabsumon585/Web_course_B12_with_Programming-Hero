import { useState } from "react"

export default function Batsman () {
    const [runs, setRuns] = useState(0)

    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }
    
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleTwo = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleThree = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleFive = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Six: {sixes}</p>
            {
                runs >= 50 && <p>Congratulations! for **Half Century**</p>
            }
            {
                runs >= 100 && <p>Congratulations! for **Century**</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleTwo}>Two</button>
            <button onClick={handleThree}>Three</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleFive}>Five</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}