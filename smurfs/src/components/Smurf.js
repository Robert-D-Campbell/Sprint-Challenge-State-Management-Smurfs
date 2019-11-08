import React from "react";

const Smurf = props => {
	if (props.smurf) {
		return (
			<div className="smurf-container">
				<h2>{props.smurf.name}</h2>
				<h1>{props.smurf.age}</h1>
				<h3>{props.smurf.height}</h3>
			</div>
		);
	} else {
		return null;
	}
};

export default Smurf;
