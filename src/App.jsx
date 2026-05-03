import { useState } from 'react'
import './App.css'
import WelcomePage from './Welcome-page'
import LoginPage from './Login-page'
import StudentDashboard from './Student-Dashboard'
import AdminForm from './Admin-Form'

function App() {

  return (
    <>
      <AdminForm></AdminForm>

      <LoginPage></LoginPage>

      <StudentDashboard></StudentDashboard>
      {/* <WelcomePage></WelcomePage> */}

    </>
  )
}

export default App
