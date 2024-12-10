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
      <div className="min-h-screen bg-gray-100 text-gray-800 p-[20vw]">
        <h1 className="text-center mt-[3vh] text-[4vw] font-bold text-blue-600">
          The Quiz Game
        </h1>
        <h2 className="text-center mt-[3vh] text-[2vw] font-semibold">
          {question.question}
        </h2>
        <div className="flex flex-col items-center gap-4 mt-[3vh]">
          {question.options.map((option, index) => (
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white px-[2vw] py-2 rounded shadow"onClick={buttonChecker(option)}>{option}</button>))}
        </div>
        <div className="flex flex-col items-center mt-[2vh]">
          {value == questionsData.length - 1 ? (
            <p className="text-lg font-semibold text-gray-700">Game Over!</p>
          ) : !answered ? (
            <button
              className="bg-gray-300 text-gray-700 px-[1vw] py-[.75vh] rounded cursor-not-allowed"
              disabled
            >Next Question</button>
          ):(
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
              onClick={() => {
                setValue(value + 1);
                cleaner();
              }}
            >Next Question</button>)}
        </div>
        <div className="mt-[2.5vh] text-center bg-white p-[1.5vw] rounded shadow-md">
          <p className="text-lg font-medium">Score: {score}</p>
          <p className="text-lg font-medium">Wrong/Right Ratio: {wrong}/{correct}</p>
          <p className="text-lg font-medium">Current Question: {value + 1}</p>
        </div>
      </div>
    </>
  );
}
export default Questioner