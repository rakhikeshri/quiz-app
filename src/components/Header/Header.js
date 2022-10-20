import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='quizapp-heading'>
      <Link to={"/"} className='quiz-head-link'>Let's Quiz</Link>
      {/* <hr style={{width:'700px', marginTop:'10px'}}/> */}
    </div>
  )
}

export default Header
