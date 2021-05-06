import React from "react";

function Task(props) {
	var a = props;
	var tasks = a.tasks;
	var completeTask = a.completeTask;
	var deleteTask = a.deleteTask;

	return (
		<div>
			{tasks.map((task, index) => {
				return (
					<div
						className="container d-flex justify-content-center my-1"
						key={index}>
						<div className="row todo lista col-4">
							<div
								className="todo col justify-content-start"
								key={task.id}
								onClick={() => completeTask(task.id)}>
								{task.tarea}
							</div>
							<div className="todo">
								<i
									className="far fa-times-circle"
									onClick={() => deleteTask(task.id)}></i>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default Task;
