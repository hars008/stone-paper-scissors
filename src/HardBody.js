import React from "react";
import ScissorsDiv from "./components/ScissorsDiv";
import RockDiv from "./components/RockDiv";
import PaperDiv from "./components/paperDiv";
import LizDiv from "./components/LizDiv";
import SpockDiv from "./components/SpockDiv";
// const { useState} = React;
import { useState } from "react";
// import { ScoreContext } from "./ScoreContext";

// let score=0;
var x = 0;
const Body = () => {
  // console.log(score);
  const winHandler = () => {
    let score = parseInt(document.getElementById("finalScore").innerHTML);
    console.log("score=" + score);
    document.getElementById("finalScore").innerHTML = score + 1;
    // let finalscore = (document.getElementById("finalScore").innerHTML =score+1;
    // console.log("finalscore=" + finalscore);
  };
  const losHandler = () => {
    let score = parseInt(document.getElementById("finalScore").innerHTML);
    // console.log("score=" + score);
    document.getElementById("finalScore").innerHTML = score - 1;
    // console.log("finalscore=" + finalscore);
  };

  const [userChoice, setUserChoice] = useState("select");
  const gameBegin = () => {
    setUserChoice("select");
  };
  const paperSelect = () => {
    x = Math.floor(Math.random() * 5);
    setUserChoice("Paper");
  };
  const scissorsSelect = () => {
    x = Math.floor(Math.random() * 5);
    setUserChoice("Scissors");
  };

  const rockSelect = () => {
    x = Math.floor(Math.random() * 5);
    setUserChoice("Rock");
  };
    const lizSelect = () => {
    x = Math.floor(Math.random() * 5);
    setUserChoice("Liz");
    };
    const spockSelect = () => {
    x = Math.floor(Math.random() * 5);
    setUserChoice("Spock");
    };
  if (userChoice === "select") {
    return (
      <div>
        <div className="start Hard">
          <RockDiv onclick={rockSelect} />
          <PaperDiv onclick={paperSelect} />
          <ScissorsDiv onclick={scissorsSelect} />
          <LizDiv onclick={lizSelect} />
          <SpockDiv onclick={spockSelect} />
        </div>
      </div>
    );
  } else {
    if (userChoice === "Rock") {
      if (x === 1) {
        winHandler();
        } else if (x === 2) {
        losHandler();
        } else if (x === 3) {
        winHandler();
        }
        else if (x === 4) {
        losHandler();
        }
    } else if (userChoice === "Paper") {
        if (x === 0) {
            winHandler();
        } else if (x === 2) {
            losHandler();
        } else if (x === 3) {
            losHandler();
        }
        else if (x === 4) {
            winHandler();


        
      }
    } else if (userChoice === "Scissors") {
        if (x === 0) {
            losHandler();
        } else if (x === 1) {
            winHandler();
        } else if (x === 3) {
            winHandler();
        }
        else if (x === 4) {
            losHandler();
        }
    } else if (userChoice === "Liz") {
        if (x === 0) {
            losHandler();
        } else if (x === 1) {
            winHandler();
        } else if (x === 2) {
            losHandler();
        }
        else if (x === 4) {
            winHandler();
        }
    } else if (userChoice === "Spock") {
        if (x === 0) {
            winHandler();
        } else if (x === 1) {
            losHandler();
        } else if (x === 2) {
            winHandler();
        }
        else if (x === 3) {
            losHandler();
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
                {userChoice === "Liz" && <LizDiv />}
                {userChoice === "Spock" && <SpockDiv />}
              </div>
            </div>
          </div>
          <div className="mychoice computerChoice">
            <h2>House Picked </h2>
            <h3>
              {x === 0 && "Rock"}
              {x === 1 && "Paper"}
              {x === 2 && "Scissors"}
                {x === 3 && "Liz"}
                {x === 4 && "Spock"}

            </h3>
            <div className="mychoiceimg computerChoiceimg">
              <div className="play shadow">
                {x === 0 && <RockDiv />}
                {x === 1 && <PaperDiv />}
                {x === 2 && <ScissorsDiv />}
                {x === 3 && <LizDiv />}
                {x === 4 && <SpockDiv />}

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
                {userChoice === "Rock" && x === 3 && "You Win"}
                {userChoice === "Rock" && x === 4 && "You Lose"}
                {userChoice === "Paper" && x === 0 && "You Win"}
                {userChoice === "Paper" && x === 1 && "Draw"}
                {userChoice === "Paper" && x === 2 && "You Lose"}
                {userChoice === "Paper" && x === 3 && "You Lose"}
                {userChoice === "Paper" && x === 4 && "You Win"}
                {userChoice === "Scissors" && x === 0 && "You Lose"}
                {userChoice === "Scissors" && x === 1 && "You Win"}
                {userChoice === "Scissors" && x === 2 && "Draw"}
                {userChoice === "Scissors" && x === 3 && "You Win"}
                {userChoice === "Scissors" && x === 4 && "You Lose"}
                {userChoice === "Liz" && x === 0 && "You Lose"}
                {userChoice === "Liz" && x === 1 && "You Win"}
                {userChoice === "Liz" && x === 2 && "You Lose"}
                {userChoice === "Liz" && x === 3 && "Draw"}
                {userChoice === "Liz" && x === 4 && "You Win"}
                {userChoice === "Spock" && x === 0 && "You Win"}
                {userChoice === "Spock" && x === 1 && "You Lose"}
                {userChoice === "Spock" && x === 2 && "You Win"}
                {userChoice === "Spock" && x === 3 && "You Lose"}
                {userChoice === "Spock" && x === 4 && "Draw"}
                

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
