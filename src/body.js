import React from "react";
import ScissorsDiv from "./components/ScissorsDiv";
import RockDiv from "./components/RockDiv";
import PaperDiv from "./components/paperDiv";

// const { useState} = React;
import { useState } from "react";
// import { ScoreContext } from "./ScoreContext";

// let score=0;
var x=0;
const Body = () => {
  // console.log(score);
  const winHandler = () => {
    let score = parseInt(document.getElementById("finalScore").innerHTML);
    // console.log("score=" + score);
    document.getElementById('finalScore').innerHTML=score+1;
    // let finalscore = (document.getElementById("finalScore").innerHTML =score+1;
    // console.log("finalscore=" + finalscore);
  };
  const losHandler = () => {
    let score = parseInt(document.getElementById("finalScore").innerHTML);
    console.log("score=" + score);
    document.getElementById("finalScore").innerHTML =score - 1;
    // console.log("finalscore=" + finalscore);
  };
  
  const [userChoice, setUserChoice] = useState("select");
  const gameBegin = () => {
    setUserChoice("select");

  };
  const paperSelect = () => {
    x = Math.floor(Math.random() * 3);
    setUserChoice("Paper");

  };
  const scissorsSelect = () => {
    x = Math.floor(Math.random() * 3);
    setUserChoice("Scissors");
  };
  
  const rockSelect = () => {
    x = Math.floor(Math.random() * 3);
    setUserChoice("Rock");
  };
  if (userChoice === "select") {
    return (
      <div>
        <div className="start">
          <PaperDiv onclick={paperSelect} />
          <ScissorsDiv onclick={scissorsSelect} />
          <RockDiv onclick={rockSelect} />
        </div>
      </div>
    );
  } else {
    
    if (userChoice === "Rock") {
      if (x === 1) {
        losHandler();
      } else if (x ===2) {
        winHandler();
      }
    } else if (userChoice === "Paper") {
      if (x === 0) {
        winHandler();
      }else if(x===2) {
        losHandler();
      }
    } else if (userChoice === "Scissors") {
      if (x === 0) {
        losHandler();
      } else if (x === 1) {
        winHandler();
      } 
    }

    // console.log(x);
    return (
      <>
        {/* <scoreContext.Provider value={score}> */}
        <div className="gameStart">
          <div className="mychoice">
            <h2>YOU PICKED</h2>
            <h3>{userChoice}</h3>

            <div className="mychoiceimg ">
              <div className="play shadow">
                {userChoice === "Rock" && <RockDiv />}
                {userChoice === "Paper" && <PaperDiv />}
                {userChoice === "Scissors" && <ScissorsDiv />}
              </div>
            </div>
          </div>
          <div className="mychoice computerChoice">
            <h2>House Picked </h2>
            <h3>
              {x === 0 && "Rock"}
              {x === 1 && "Paper"}
              {x === 2 && "Scissors"}
            </h3>
            <div className="mychoiceimg computerChoiceimg">
              <div className="play shadow">
                {x === 0 && <RockDiv />}
                {x === 1 && <PaperDiv />}
                {x === 2 && <ScissorsDiv />}
              </div>
            </div>
          </div>
        </div>
        <div className="result">
          <div>
            <h1>
              {userChoice === "Rock" && x === 0 && "Draw"}
              {userChoice === "Rock" && x === 1 && "You Lose"}
              {userChoice === "Rock" && x === 2 && "You Win"}
              {userChoice === "Paper" && x === 0 && "You Win"}
              {userChoice === "Paper" && x === 1 && "Draw"}
              {userChoice === "Paper" && x === 2 && "You Lose"}
              {userChoice === "Scissors" && x === 0 && "You Lose"}
              {userChoice === "Scissors" && x === 1 && "You Win"}
              {userChoice === "Scissors" && x === 2 && "Draw"}
            </h1>
          </div>
          <div>
            <button onClick={gameBegin}> Play Again</button>
          </div>
        </div>
        {/* </scoreContext.Provider> */}
      </>
    );
  }
};

export default Body;
