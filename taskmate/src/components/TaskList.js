import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./taskList.css"

export const TaskList = ({ info }) => {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Record Lectures", completed: false },
        { id: 2, name: "Edit Lectures", completed: true },
        { id: 3, name: "Watch Lectures", completed: false }]);
    const [show, setShow] = useState(true);

    const handleDelete = (id) => setTasks(tasks.filter(task => task.id !== id));
    const styles = {
        color: show ? "#3d83601" : "#be3434",
        border: "5px dotted",
        borderColor: show ? "#3d83601" : "#be3434",
        borderRadius: "5px",
        padding: "20px"
    }

    return (
        <section className='tasklist'>
            <h1 style={styles}>Task List</h1>
            <ul>
                <button style={{width: "70px"}} className="trigger" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete} />
                ))
                }
            </ul>
            <BoxCard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, error.</p>
            </BoxCard>
            <BoxCard result="warning">
                <p className="title">Lorem ipsum dolor sit.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, error.</p>
            </BoxCard>
            <BoxCard result="alert">
                <p className="title">Lorem, ipsum.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, possimus!</p>

            </BoxCard>
        </section>
    )
}
