import React from 'react'
import ScissorsDiv from './components/ScissorsDiv';
import RockDiv from './components/RockDiv';
import PaperDiv from './components/paperDiv';
const {useState} = React;
const Body = () => {
  const [userChoice, setUserChoice] = useState("select");
  console.log(userChoice);
  const paperSelect = () => {
    setUserChoice("paper");
  };
  const scissorsSelect = () => {
    setUserChoice("scissors");
  };
  const rockSelect = () => {
    setUserChoice("rock");
  };
  if(userChoice==="select"){
    
  return (
    <div>
      <div className="start">
        <PaperDiv onclick={paperSelect}/>
        <ScissorsDiv onclick={scissorsSelect}/>
        <RockDiv onclick={rockSelect}/>
      </div>
    </div>
  );
  }
  else{
    return (
      <div className="gameStart">
        <div className="mychoice">
          <h1>YOU PICKED</h1>
          <div className="mychoiceimg ">
            {userChoice === "rock" && (
              <div className="play">
                <RockDiv />
              </div>
            )}
            {userChoice === "paper" && (
              <div className="play">
                <PaperDiv />
              </div>
            )}
            {userChoice === "scissors" && (
              <div className="play">
                <ScissorsDiv />
              </div>
            )}
            <h2>{userChoice}</h2>
          </div>
        </div>
        <div className="computerChoice">
          <h1>The House Picked </h1>
        </div>
      </div>
    );
  }
}

export default Body
