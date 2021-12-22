import React from "react";
import UserManager from "./components/functions";
import './App.css';
import reactDom from "react-dom";
import LoginComponent from "./components/login";

const user = new UserManager();
function login() {
  var d = user.login(
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
    //alert("Login successful.");
    const elemx = (
      <div>
      <h1>Login succeeded</h1>
      <br>
      </br>
      <h2>Your token: {d.token}    (Keep secret)</h2>
      <br>
      </br>
      <h2>Your username: {d.codename}</h2>
      </div>
    );
    reactDom.render(elemx, document.getElementById('root'));
  }
}
function reg() {
  var d = user.register(
    document.getElementById("email1").value,
    document.getElementById("pwd2").value,
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

const element = (
    <div className="App">
      <h1>Welcome to Schooglink!</h1>
      <div id="main">
        <div className="h-tag">
          <h2>Register yourself</h2>
        </div>
        <div className="login">
          <table cellSpacing="2" align="center" cellPadding="8" border="0">
            <tr>
              <td>Enter your Name :</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter user name here"
                  id="name"
                  className="tb"
                />
              </td>
            </tr>
            <tr>
              <td>Enter email :</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter user name here"
                  id="email1"
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
                  id="pwd2"
                  className="tb"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  value="Clear"
                  onClick="clearFunc()"
                  className="btn"
                  onClick={() => {document.getElementById("email1").value = ""; document.getElementById("pwd2").value = "";}}
                />
                <input
                  type="submit"
                  value="Register"
                  className="btn"
                  onClick={reg}
                />
              </td>
            </tr>
            <a onClick={() => {return(<LoginComponent/>)}}>Back to login</a>
          </table>
        </div>
      </div>
    </div>
);
function App() {
  


  return (
    <LoginComponent element={element}/>
  );
  
}

export default App;
