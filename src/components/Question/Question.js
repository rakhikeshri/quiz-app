import React, { useState } from 'react'
import './question.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Question = ({  
    questions,
    currques,
    setCurrques,
    options,
    correct,
    score,
    setScore,
    setQuestions,  
}) => {

    const navigate = useNavigate();
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    const handleCheck = (i) => {
        setSelected(i);
        if(i === correct) {
            setScore(score + 1);
        }else {
            setError(false)
        }
    }
    const handleSelect = (i) =>{
        if(selected === i && selected === correct){
             return "select"; 
        }
        else if(selected === i && selected !== correct){
            return "wrong";
        }
        else if(i === correct) {
            return "select";
        }
    }

    const handleQuit = ()=>{

    }
    const handleNext = ()=>{
        if(currques >8){
            navigate('/result')
        }
        else if(selected){
            setCurrques(currques + 1)
            setSelected();
        }else {
            setError("plse select");
        }
    }

    return (
        <div>
            <h1>Question {currques + 1}</h1>

            <div>
                <h2>{questions[currques].question}</h2>
                <div className='options'>
                {error && <ErrorMessage />}
                {
                    options && options.map((i) => <button key={i} disabled={selected} onClick={() => handleCheck(i)} className={`${selected && handleSelect(i)}`}>{i}</button>)
                }
                </div>
                <div>
                    <Button
                    onClick={handleQuit}
                    href='/'
                    >
                    Quit
                    </Button>
                    <Button
                    onClick={handleNext}>
                    Next Ques
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Question
