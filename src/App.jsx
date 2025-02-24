"use client"

import { useState } from "react"
import Login from "./pages/Login" // Ensure this path is correct
import Signup from "./pages/Signup" // Ensure this path is correct
import "./App.css"

import bgDefault from "./assets/bg.jpg" // Default background
import bgLogin from "./assets/login.jpg" // Background for login page
import bgSignup from "./assets/signup.jpg" // Background for signup page

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  // Determine the background image based on the active state
  const backgroundImage = showLogin
    ? bgLogin
    : showSignup
    ? bgSignup
    : bgDefault

  return (
    <div className="App">
      {/* Background Container with Blur Effect */}
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay for Dark Effect */}
      <div className="blur-overlay"></div>

      {/* Show Login or Signup Page */}
      {showLogin ? (
        <Login onClose={() => setShowLogin(false)} />
      ) : showSignup ? (
        <Signup onClose={() => setShowSignup(false)} />
      ) : (
        <div className="white-box">
          <h2>Welcome</h2>
          <p>Please login or sign up to continue.</p>
          <div className="button-container">
            <button className="btn login" onClick={() => { setShowLogin(true); setShowSignup(false); }}>
              Login
            </button>
            <button className="btn signup" onClick={() => { setShowSignup(true); setShowLogin(false); }}>
              Signup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
