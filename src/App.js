import React, { useState } from "react";
import Login from "./pages/login"; // Ensure the correct path
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false); // Track login visibility

  return (
    <div className="App">
      {/* Background Container */}
      <div className="Img">
        <div className="blur-overlay"></div>
      </div>

      {/* Show Login Page on Button Click */}
      {showLogin ? (
        <Login />
      ) : (
        <div className="white-box">
          <h2>Welcome</h2>
          <p>Please login or sign up to continue.</p>
          <div className="button-container">
            <button className="btn login" onClick={() => setShowLogin(true)}>
              Login
            </button>
            <button className="btn signup">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
