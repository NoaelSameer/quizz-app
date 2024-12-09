import React from 'react'
import questionsData from "../Files/questions"

import { useState, useEffect } from'react'


function Questioner() {
  const [value, setValue] = useState(0);
  const [question, setQuestion] = useState(questionsData[value])
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0);
  const [answered, setAnswered] = useState(false);
  
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
    if(answered){
      setQuestion(questionsData[value])
      setAnswered(false);}
  }, [value])


  const buttonChecker = (answer) => () => {

    if(answer === question.answer){
      setScore(score + 1)
      setCorrect(correct + 1)
      alert("correct")
      let buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => button.disabled = true);
      setAnswered(true)

    } else {
      setWrong(wrong + 1)
      let buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => button.disabled = true);
      alert("Incorrect, the correct answer was " + question.answer)   
      setAnswered(true); 
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
    {
  value === questionsData.length - 1 ? (
    <p>Cooked</p>
  ) : !answered ? (
    <button className="flex items-center">
      Next Question
    </button>
  ) : (
    <button
      className="flex items-center"
      onClick={() => {
        setValue(value + 1);
        cleaner();
      }}
    >
      Next Question
    </button>
  )
}
    </div>
    
    <div>
      <p>Score: {score}</p>
      <p>Wrong/Right ratio: {wrong}/{correct}</p>
      <p>Current Question: {value}</p>
    </div>



  </>
  );
}
export default Questioner