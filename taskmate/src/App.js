import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import './App.css';
export default function App() {
    const info = "whatever";
    return (
        <div className='App'>
            <Header />
            <TaskList info={info}/>
            <Footer />
        </div>
    );
}
