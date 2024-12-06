import React from 'react'
import questionsData from "../Files/questions"

import { useState, useEffect } from'react'


function Questioner() {
  const [value, setValue] = useState(0)
  const [question, setQuestion] = useState(questionsData[value])
  // const [question, setQuestion] = useState(questionsData[value])

  useEffect(() => {
    setQuestion(questionsData[value])
  }, [value])


  const buttonChecker = (answer) => () => {

    if(answer === question.answer){
      
    } else {

    }
  }


  return(
    <>
    <h1 className="text-center mt-[8vh] text-[5vw]">The Quizz Game</h1>
    <h1 className='text-center mt-[4vh] text-[2vw] font-bold'>{question.question}</h1>
    {question.options.map(option =>
    <button className='flex' onClick={buttonChecker(option)}>{option}</button>
    )}

    {value === questionsData.length - 1 ? <p>by</p> : <button onClick={()=>{setValue(value + 1)}}>Click Me</button>}
{/* if (
      value === questionsData.length - 1
    ) { */}
      {/* // <button onClick={()=>{setValue(value + 1)}}>Click Me</button> */}
    {/* } */}
    </>
  )
}

export default Questioner