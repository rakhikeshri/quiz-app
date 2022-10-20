import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      made with ❤  { <a className='footer' style={{textDecoration: 'none', marginTop:'50px'}} href='https://github.com/rakhikeshri/quiz-app' target='_blank'>Source Code here :)</a>} 
    </div>
  )
}

export default Footer