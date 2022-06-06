import React, {useState} from 'react';
import {GiHornedHelm} from "react-icons/gi";
import {AiOutlinePlus, AiOutlineClose} from "react-icons/ai";

const App = () => {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    //add Tasks
    const handleSubmit = (event) => {
        event.preventDefault()
        const addTask = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            completed: false,
        }
        setTasks([...tasks, addTask])
        setInput('')
    }

    //delete Tasks
    const deleteTasks = (id) => {
        let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
        setTasks(filteredTasks)
    }

    //toggle complete tasks
    const toggleComplete = (id) => {
        setTasks(
            tasks.map(task => (
                task.id === id ? {...task, completed: !task.completed} : task
            ))
        )
    }

    const date = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", "Saturday"]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (
        <div className='App'>
            <div className="container">
                <h1><GiHornedHelm/>PowerList</h1>
                <div className="date">
                    <p>{days[date.getDay()]}</p>
                    <p>{date.getDate()},</p>
                    <p>{months[date.getMonth()]}</p>
                    <p>{date.getFullYear()}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <AiOutlinePlus className='icon'/>
                        <input
                            value={input}
                            type="text"
                            placeholder='Enter a task'
                            onChange={(event => setInput(event.target.value))}
                        />
                    </div>
                </form>
                <div>
                    {tasks.map(task => (
                        <div className={`task-row ${task.completed ? 'completed' : ''}`} key={task.id} onDoubleClick={() => toggleComplete(task.id)}>
                            <p>{task.text}</p>
                            <AiOutlineClose onClick={() => deleteTasks(task.id)} className='icon'/>
                        </div>
                    ))}
                </div>
                <p className='length'>{(tasks < 1) ? 'You have no tasks' : `Tasks: ${tasks.length}`}</p>
            </div>
        </div>
    );
};

export default App;