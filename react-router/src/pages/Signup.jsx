import React from 'react'
import Template from '../components/Template'
import signup from '../assets/signup.png'

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    formType="signup"
    image={signup}
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup