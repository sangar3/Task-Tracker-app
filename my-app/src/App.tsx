import React, {FC, useState} from 'react'; //add FC = functional component   type
import "./App.css"

// app is a functional component 
const App:FC = () =>  {

  

  return (
    <div className="App">

      <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Task.."></input>
            <input type="number" placeholder="Deadline (DAYS).."></input>
          </div>
          <button>Add Task</button>
      </div>

      <div className="todoList">

      </div>

    </div>
  );
}

export default App;
