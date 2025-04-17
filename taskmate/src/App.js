import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';
import { useState } from 'react';
import './App.css';
export default function App() {
    const [tasks, setTasks] = useState([]);
    
    return (
        <div className='App'>
            <Header />
            <main>
                <AddTask tasks={tasks} setTasks={setTasks}/>
                <TaskList tasks={tasks} setTasks={setTasks}/>
            </main>
            <Footer />
        </div>
    );
}
