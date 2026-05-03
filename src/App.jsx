import { useState } from 'react'
import './App.css'
import WelcomePage from './Welcome-page'
import LoginPage from './Login-page'
import StudentDashboard from './Student-Dashboard'

function App() {

  return (
    <>
      <LoginPage></LoginPage>

      <StudentDashboard></StudentDashboard>

      {/* <WelcomePage></WelcomePage> */}

    </>
  )
}

export default App
