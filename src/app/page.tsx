'use client';

import { useState } from 'react';

export default function Home() {
    const [tasks, setTasks] = useState<string[]>([]); // 型を指定
    const [input, setInput] = useState<string>(''); // 型を指定

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>ToDo List</h1>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a task"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
