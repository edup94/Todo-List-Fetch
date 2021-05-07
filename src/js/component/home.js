import React, { useState } from "react";
import PropTypes from "prop-types";

function Home(props) {
	const [input, setInput] = useState("");

	const idOnSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			label: input,
			done: false
		});
		setInput("");
	};
	const onChangeInput = e => {
		setInput(e.target.value);
	};

	return (
		<div className="container">
			<form onSubmit={idOnSubmit}>
				<div className="row justify-content-center">
					<div className="col-4 bg-white top">
						<input
							type="text"
							className="form-control mb-2"
							id="inlineFormInput"
							placeholder="Ingrese Tarea"
							onChange={onChangeInput}
							value={input}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
Home.propTypes = {
	idOnSubmit: PropTypes.func,
	onSubmit: PropTypes.func
};
export default Home;
