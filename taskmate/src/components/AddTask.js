import "./AddTask.css";
import { useState, useRef } from "react";

export const AddTask = ({tasks, setTasks}) => {
    //const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false)
    const taskRef = useRef("");
    // const handleChange = (event) => {
    //     console.log(taskRef.current.value);
    // }
    const handleReset = ()=>{
        taskRef.current.value = "";
        setProgress(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const task ={
            id: Math.floor(Math.random() * 10000),
            name: "dupa",
            completed: Boolean(progress)
        };
        setTasks([...tasks, task]);
        handleReset();
    }
    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input type="text" id="task" name="task" placeholder="Add a task name" autoComplete="off" ref={taskRef}/>
                <select onChange={(event)=> setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <button type="submit">Add Task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
            <p>{taskRef.current.value}</p>
        </section>
    )
}
