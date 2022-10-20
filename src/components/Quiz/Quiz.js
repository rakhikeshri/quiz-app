import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import Question from '../Question/Question';
import './quiz.css'

const Quiz = ({ name, setScore, score, questions, setQuestions }) => {

  const [options, setOptions] = useState();
  const [currques, setCurrques] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
      handleShuffle([
        questions[currques]?.correct_answer,
        ...questions[currques]?.incorrect_answers,
      ]))
  }, [questions, currques])

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  }
  return (
    <div className='quiz-main'>
      <h2 className='welcome-name'>Welcome {name}</h2>
      {
        questions ? (
          <div className='quiz-box'>
            <div className='heading'>
              <h2>{questions[currques].category}</h2>
              <h2>Score : {score}</h2>
            </div>

            <Question
              questions={questions}
              currques={currques}
              setCurrques={setCurrques}
              options={options}
              correct={questions[currques]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </div>
        ) : (
          <CircularProgress />
        )
      }

    </div>
  )
}

export default Quiz
