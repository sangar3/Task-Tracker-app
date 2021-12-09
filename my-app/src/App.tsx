import React, {FC,ChangeEvent, useState} from 'react'; //add FC = functional component   type changeevent = represents ay events that involve changes and inputs 
import "./App.css"  //import css
import TodoTask from './Components/TodoTask'; // import component
import {ITask} from './Interfaces' //import interface


// app is a functional component 
const App:FC = () =>  {

  //TASK state(Keep track of) for task of string type
  const [task, setTask] = useState<string>("");

  //DEADLINE state(Keep track of) for deadlines of number type
  const [deadline, setDeadline] = useState<number>(0);

  // todo state 
  const [todoList, setTodoList] = useState<ITask[]>([]);


  //fucntion to handle any changes in input and grab events from user input

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void  => 
  {
    // if input calls task function 
    if(event.target.name === "task") 
    {
      setTask(event.target.value);
    }
    else
    {
      setDeadline(Number(event.target.value)); //converts string to number
    }
  }

  // function to add task to the todo list 

  const addTask = (): void => 
  {
    const newTask = {taskName: task, deadline: deadline }; // create a task object 
    setTodoList([...todoList, newTask]); //old todo list 
    // console.log(todoList) find what is being added to the list
    setTask("") // clears tasks
    setDeadline(0) // clears deadline 
  }

  // function to remove tasks 
  const completeTask = (taskNameToDelete:string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete // goes through all elements in to dolist 
    })) // set todo list to it self and fiter everything inside of it that has the same name into the function 
  }

  return (
    <div className="App">

      <div className="header">
          <div className="inputContainer">
            <input 
            type="text" 
            placeholder="Task.." 
            name="task" 
            onChange={handleChange}
            value={task}
            >
            </input>

            <input 
            type="number" 
            placeholder="Deadline (DAYS).." 
            name="deadline" 
            onChange={handleChange}
            value={deadline}>
            </input>
          </div>
          <button onClick={addTask}>Add Task</button>
      </div>

      <div className="todoList"> 
        {/* Map every element in the list adn display each element in the list  */}
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>

    </div>
  );
}

export default App;
