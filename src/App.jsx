import { useState } from 'react'
import './App.css'
import WelcomePage from './Welcome-page'
import LoginPage from './Login-page'
import StudentDashboard from './Student-Dashboard'
import AdminForm from './Admin-Form'
import LecturerForm from './LecturerForm'
import StudentResults from './Student-Results'

function App() {

  return (
    <>
      <StudentResults></StudentResults>
      <LecturerForm></LecturerForm>

      <AdminForm></AdminForm>

      <LoginPage></LoginPage>

      <StudentDashboard></StudentDashboard>
      {/* <WelcomePage></WelcomePage> */}

    </>
  )
}

export default App
