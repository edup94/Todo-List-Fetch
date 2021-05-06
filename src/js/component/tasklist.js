import React, { useState } from "react";
import Home from "./home.js";
import Task from "./task.js";

export function Tasklist() {
	const [tasks, setTasks] = useState([]);

	const addTask = task => {
		const newTasks = [task, ...tasks];
		setTasks(newTasks);
	};

	const deleteTask = id => {
		const removeArr = [...tasks].filter(task => task.id !== id);
		setTasks(removeArr);
	};

	const completeTask = id => {
		let completeTodo = tasks.map(task => {
			if (task.id === id) {
				task.isComplete = !task.isComplete;
			}
			return task;
		});
		setTasks(completeTodo);
	};

	return (
		<div className="container bg-secondary">
			<div className="row justify-content-center">
				<h1>To Do</h1>
			</div>
			<div className="row">
				<Home onSubmit={addTask} />
			</div>

			<Task
				tasks={tasks}
				completeTask={completeTask}
				deleteTask={deleteTask}
			/>
		</div>
	);
}
export default Tasklist;
