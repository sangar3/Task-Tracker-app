import { ITask } from "../Interfaces"

interface Props 
{
    task:ITask;

}

const  TodoTask = ({task }: Props) => {
    return (
        <div>
            {task.taskName}
            {task.deadline}
        </div>
    )
}

export default TodoTask
