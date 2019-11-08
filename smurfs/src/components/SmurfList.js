import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

import Smurf from "./Smurf";

const SmurfList = props => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);
	if (props.isFetching) {
		return <h2>Loading Smurfs...</h2>;
	}
	return (
		<div className="smurf-list-container">
			{props.error && <p>{props.error}</p>}
			{props.smurfList.map(smurf => (
				<Smurf key={smurf.id} smurf={smurf} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		smurfList: state.smurfList,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(
	mapStateToProps,
	{ fetchSmurfs }
)(SmurfList);
