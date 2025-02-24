"use client"

import { useState } from "react"
import "./Signup.css"
import { X } from "lucide-react"

const Signup = ({ onClose }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
  }

  return (
    <div className="signup-container">
      <button className="close-button" onClick={onClose}>
        <X size={24} />
      </button>

      <h1 className="signup-title">Sign Up</h1>
      <p className="signup-subtitle">Create a New Account</p>

      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email-Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-input"
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
