import { Button, MenuItem, TextField } from '@mui/material'
import React, {useState, useEffect} from 'react'
import './Home.css'
import Categories from '../Data/Categories.js'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const Home = ({ name, setName, fetchQuestions }) => {

  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = () => {
    if(!category || !name || !difficulty) {
      setError(true)
      return
    }else{
      setError(false)
      fetchQuestions(category, difficulty)
      navigate('/quiz')
    }
  }

  return (
    <div className='content'>
      <div>
        <h1>Quiz Settings</h1>
        <br />
        <div className='inputs'>

          {error && <ErrorMessage> fill it all</ErrorMessage>}

          <TextField variant='outlined' label='enter your name' onChange={(e) => setName(e.target.value)}/>
          <TextField variant='outlined' label='Category' select onChange={(e) => setCategory(e.target.value)} value={category}>
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField variant='outlined' label='Difficulty' select onChange={(e) => setDifficulty(e.target.value)} value={difficulty} >
              <MenuItem key='easy' value='easy'>
                Easy
              </MenuItem>
              <MenuItem key='medium' value='medium'>
                Medium
              </MenuItem>
              <MenuItem key='hard' value='hard'>
                Hard
              </MenuItem>
          </TextField>

          <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>Start Quiz</Button>
        </div>
      </div>
    </div>
  )
}

export default Home

