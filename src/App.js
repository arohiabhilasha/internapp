import React from "react";
import UserManager from "./components/login";
import './App.css';

const user = new UserManager();
function login() {
  var d = user.register(
    document.getElementById("email").value,
    document.getElementById("pwd1").value,
  );
  if (
    d == false
  ) {
    alert("Login failed.");
  } else {
    //alert(d.state);
    console.log(d);
    alert("Login successful.");
  }
}
function App() {
  


  return (
    <div className="App">
      <h1>Welcome to Schooglink!</h1>

      <div id="main">
        <div className="h-tag">
          <h2>Welcome To My Account Login</h2>
        </div>
        <div className="login">
          <table cellSpacing="2" align="center" cellPadding="8" border="0">
            <tr>
              <td>Enter User Name :</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter user name here"
                  id="email"
                  className="tb"
                />
              </td>
            </tr>
            <tr>
              <td>Enter Password :</td>
              <td>
                <input
                  type="password"
                  placeholder="Enter Password here"
                  id="pwd1"
                  className="tb"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  value="Reset"
                  onClick="clearFunc()"
                  className="btn"
                />
                <input
                  type="submit"
                  value="Login"
                  className="btn"
                  onClick={login}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
  
}

export default App;
