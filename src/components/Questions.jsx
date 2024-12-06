import React from 'react'
import questionsData from "../Files/questions"

import { useState, useEffect } from'react'


function Questioner() {
  let wrong = 0, right = 0
  const [value, setValue] = useState(0);
  const [question, setQuestion] = useState(questionsData[value])
  const [score, setScore] = useState(0);

  useEffect(()=>{
    wrong
  },[score])
  
  // useEffect(()=>{
  //   setScore(right - wrong)
  //   setValue(0)
  //   wrong = 0
  //   right = 0
  //   let buttons = document.querySelectorAll('.btn');
  //   buttons.forEach(button => button.disabled = false);
  // },[score])
  // const [question, setQuestion] = useState(questionsData[value])

  useEffect(() => {
    setQuestion(questionsData[value])
  }, [value])


  const buttonChecker = (answer) => () => {

    if(answer === question.answer){
      setScore(score + 1)
      alert("correct")
      let buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => button.disabled = true);

    } else {
      setScore(score - 1);
      wrong++;
      alert("wrong")
    }
  }

  const cleaner = () =>{
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.disabled = false);
  }


  return(
    <>
    <h1 className="text-center mt-[8vh] text-[5vw]">The Quizz Game</h1>
    <h1 className='text-center mt-[4vh] text-[2vw] font-bold'>{question.question}</h1>
    <div className="flex flex-col items-center gap-[1vh] mt-[3vh]">
    {question.options.map(option =>
    <button className='flex btn items-center' onClick={buttonChecker(option)}>{option}</button>)}
    </div>
    <div className='flex flex-col items-center mt-[2vh]'>
      {value === questionsData.length - 1 ? <p>Cooked</p> : <button className='flex items-center' onClick={() => { setValue(value + 1);cleaner();}}>Next Question</button>}
    </div>
    
    <div>
      <p>Score: {score}</p>
      <p>Wrong/Right ratio:{wrong}/{right}</p>
      <p>Total Questions left: {questionsData.length - value}</p>
    </div>



  </>
  );
}
export default Questioner