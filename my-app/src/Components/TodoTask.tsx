import { ITask } from "../Interfaces"

interface Props 
{
    task:ITask;
    completeTask(taskNameToDelete: string): void;

}

const  TodoTask = ({task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span> <span id="ItemTitle1">Task:</span> {task.taskName}</span>
                <span> <span id="ItemTitle2">Days Due:</span>  {task.deadline} </span>
            </div>
            <button onClick={() => {completeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask
