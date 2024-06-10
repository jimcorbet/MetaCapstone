import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    setIsLoggedIn(true);
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", marginTop: "100px", padding: "16px", backgroundColor: "white", border: "1px solid black", borderRadius: "4px" }}>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required onChange={(e) => setUsername(e.target.value)} style={{ width: "90%", padding: "15px", margin: "5px 0 22px 0", display: "inline-block", border: "none", background: "#f1f1f1" }}/>

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => setPassword(e.target.value)} style={{ width: "90%", padding: "15px", margin: "5px 0 22px 0", display: "inline-block", border: "none", background: "#f1f1f1" }}/>

          <input type="submit" value="Login" style={{ backgroundColor: "#4CAF50", color: "white", padding: "16px 20px", margin: "8px 0", border: "none", cursor: "pointer", width: "100%", opacity: "0.9" }}/>
        </form>
      )}
    </div>
  );
};

export default LoginPage;


/*import React from "react";
import UnderConstruction from "../Sections/UnderConstruction/UnderConstruction";

const Login = () => {
  return (
    <UnderConstruction />
  );
};
export default Login;*/