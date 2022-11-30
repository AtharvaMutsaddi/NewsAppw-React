import { useState } from "react"

const Home = () => {
    const handleClick = () =>{
        console.log("Hello World")
    }
    
    // PARAMETERIZED FUNCTION 
    const handleClickagain= (name) =>{
        console.log("Henlo " + name);
    }


    // USING CLICK EVENTS TO DYNAMICALLY CHANGE HTML
    const[currval, setcurrval] = useState("This is my value before Clicking");
    const reactiveButtonClick= ()=>{
        setcurrval("This is my value after clicking");
    }
    const [testscore, settestscore]= useState("");
    const submithandleClick= ()=>{
        if (document.getElementById('answer').value== "4") {
            settestscore("CORRECT ANS!!!")
        }
        else{
            settestscore("WRONG ANS!!!!")
        }
    }
    // RETUNRING O/P
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* NON PMETERIZED CLCIK EVENTS */}
            <button onClick={handleClick}>Click me</button>
            {/* USING PARAMETERISED CLICK EVENTS */}
            <button onClick={() => {
                handleClickagain("Atharva");
            }}>Click me [paramerterized] </button>
            <br /><br />
            <button onClick={reactiveButtonClick}>Reactive Value</button>
            <p>{ currval } </p>
            <br />
            <h2>Solve this math: what's 2+2?</h2>
            <button onClick={submithandleClick}>Submit</button>
            <input type="text" id="answer" />
            <p>{ testscore } </p>
        </div>
     );
}
 
export default Home;