
import React from "react";
import reactDom from "react-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar";
import Subjects from "./subjects";

let x = [];
function v(l,r){
    let x = [];
    while(l.length) {
        x.push(l.splice(0,r));
    }
    return x;
}

function Dashboard(state) {
  console.log(state);
  let k = state;
  state = state.state.state;
  
  let p = v(state.boards,3);
  console.log();
  let b = [];
  p.map((e) => {e.map(e => {b.push(e)})});
  return (
    <div className="dash-de">
      <NavBar />
      <h1>BOARDS</h1>
      <p>Choose your board </p>
      {b.map((e) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={e.boardIcon} />
          <Card.Body>
            <Card.Title>{e.boardName}</Card.Title>
            
            <Button variant="primary" style={{backgroundColor: "#405d27"}} onClick={() => {
                // CLasses
                console.log(e);
                reactDom.render(<div className="dash-de">
                    <NavBar />
                    <h1>CLASSES</h1>
      <p>Choose your class </p>
                    {e.Classes.map((e) => (
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={e.classIcon} />
                        <Card.Body>
                          <Card.Title>{e.className}</Card.Title>
                          <Button variant="primary" style={{backgroundColor: "#405d27"}} onClick={(e) =>{e.preventDefault();
                            reactDom.render(<Subjects state={k} cid={e.classId} />, document.getElementById('root'));
                          }}>Explore!</Button>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>, document.getElementById('root'));
            }}>Explore!</Button>
          </Card.Body>
        </Card>
  ))}
    </div>
  );
}

export default Dashboard;
