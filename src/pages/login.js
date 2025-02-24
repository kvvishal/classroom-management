"use client"

import { useState } from "react"
import "./Login.css"
import { X } from "lucide-react"

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="login-container">
      <button className="close-button" onClick={onClose}>
        <X size={24} />
      </button>

      <h1 className="login-title">Log In</h1>
      <p className="login-subtitle">Login to your Account</p>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email-Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <div className="remember-me">
          <input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login

