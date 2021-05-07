import React, { useState, useEffect } from "react";
import Home from "./home.js";
import Task from "./task.js";
import { array } from "prop-types";

export function Tasklist() {
	const [tasks, setTasks] = useState([]);
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	const addTask = task => {
		const newTasks = [task, ...tasks];
		setTasks(newTasks);
		updateData(newTasks);
	};

	const getData = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/edup94")
			.then(resp => resp.json())
			.then(data => setTasks(data))
			.catch(error => setShowError(true));
	};

	const updateData = updatedList => {
		let updatedListToSend = JSON.stringify(updatedList);
		let options = {
			method: "PUT",
			body: updatedListToSend,
			headers: {
				"Content-Type": "application/json"
			}
		};
		console.log(updatedListToSend);
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/edup94",
			options
		)
			.then(resp => resp.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	const deleteData = updatedList => {
		let updatedListToSend = JSON.stringify(updatedList);
		let options = {
			method: "PUT",
			body: updatedListToSend,
			headers: {
				"Content-Type": "application/json"
			}
		};
		console.log(updatedListToSend);
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/edup94",
			options
		)
			.then(resp => resp.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	const deleteTask = i => {
		const removeArr = [...tasks].filter(task => task.label !== i);
		setTasks(removeArr);
		deleteData(removeArr);
	};

	const completeTask = i => {
		let completeTodo = tasks.map(task => {
			if (task.label === i) {
				task.isComplete = !task.isComplete;
			}
			return task;
		});
		setTasks(completeTodo);
	};

	return (
		<div className="container">
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
			{showError ? <h1>Algo salió mal!</h1> : null}
		</div>
	);
}
export default Tasklist;
