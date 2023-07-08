import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) =>  {
  
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("You are in healthy weight");
      } else {
        setMessage("You are over weight");
      }
    }
  }

    let reload = () => {
      window.location.reload();
    };
    return (
      <div className="App">
        <div className="container">
          <h1>BMI CALCULATOR</h1>
          <form onSubmit= {calcBmi} >
            <div>
              <label htmlFor="">weight(lbs)</label>
              <input
                type="text"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />{" "}
              <br />
              <label htmlFor="">Height(inch)</label>
              <input
                type="text"
                placeholder="Enter your height"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
              <div className="button">
                <button type="submit" >Submit</button>
                <button onClick={reload} type="submit">Reload</button>
              </div>
              <div className="center">
                {" "}
                <h3>Your BMI IS: {bmi}</h3> 
                <p>{message}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default App;
