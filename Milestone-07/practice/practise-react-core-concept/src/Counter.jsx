import { useState } from "react"

export default function Counter() {
    const [countApple, setApple] = useState(0)
    const [countOranges, setOranges] = useState(0)

    return (
        
        <div>
            <div style={{
                marginTop: "15px",
                border: "2px solid red",
                padding: "10px 15px",
                backgroundColor: "yellow",
                borderRadius: "15px"
            }}>
                <h2>Apples: {countApple}</h2>

                <p>
                    { countApple === 0 ? "start your shopping" : countApple < 10 ?  "keep going!" : "Wow, count is high!"}
                </p>
                
            
                <div style={{
                    display: "flex",
                    gap: "10px"
                }}>
                    <button onClick={() => setApple(countApple + 1)}>Increase</button>
                    <button onClick={() => setApple(
                        countApple > 0 ? countApple - 1 : 0
                    )}>Decrease</button>
                    <button onClick={() => setApple(0)}>RESET ALL</button>
                </div>
            </div>
            <div style={{
                marginTop: "15px",
                border: "2px solid red",
                padding: "10px 15px",
                backgroundColor: "yellow",
                borderRadius: "15px"
            }}>
                <h2>Oranges: {countOranges}</h2>

                <p>
                    { countOranges === 0 ? "start your shopping" : (countOranges < 10 ?  "keep going!" : "Wow, count is high!")}
                </p>
            
                <div style={{
                    display: "flex",
                    gap: "10px"
                }}>
                    <button onClick={() => setOranges(countOranges + 1)}>Increase</button>
                    <button onClick={() => setOranges(
                        countOranges > 0 ? countOranges - 1 : 0
                    )}>Decrease</button>
                    <button onClick={() => setOranges(0)}>RESET ALL</button>
                </div>
            </div>            
        </div>
    )
}