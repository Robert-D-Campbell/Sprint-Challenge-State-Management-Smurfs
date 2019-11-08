import React, { useState } from "react";
import { connect } from "react-redux";

import { postSmurf } from "../actions";

const SmurfForm = props => {
	const [formData, setFormData] = useState({});

	const handleNameChanges = e => {
		setFormData({ ...formData, name: e.target.value });
	};
	const handleAgeChanges = e => {
		setFormData({ ...formData, age: Number(e.target.value) });
	};
	const handleHeightChanges = e => {
		setFormData({ ...formData, height: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		props.postSmurf(formData);
		setFormData({
			name: "",
			age: "",
			height: ""
		});
	};
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					name="name"
					placeholder="Name of Smurf"
					value={formData.name}
					onChange={handleNameChanges}
				/>
				<input
					type="text"
					name="age"
					placeholder="Age of Smurf"
					value={formData.age}
					onChange={handleAgeChanges}
				/>
				<input
					type="text"
					name="height"
					placeholder="Height of Smurf"
					value={formData.height}
					onChange={handleHeightChanges}
				/>
				<button>Add Smurf</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		smurfList: state.smurfList,
		isPosting: state.isPosting,
		error: state.error
	};
};

export default connect(
	mapStateToProps,
	{ postSmurf }
)(SmurfForm);
