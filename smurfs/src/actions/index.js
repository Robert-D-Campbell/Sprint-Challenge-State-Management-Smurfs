import axios from "axios";
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const START_POSTING = "START_POSTING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const fetchSmurfs = () => dispatch => {
	dispatch({ type: START_FETCHING });
	axios
		.get("http://localhost:3333/smurfs")
		.then(res =>
			dispatch({
				type: FETCH_SUCCESS,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: FETCH_FAIL,
				payload: err.response
			})
		);
};

export const postSmurf = smurfData => dispatch => {
	dispatch({ type: START_POSTING });
	axios
		.post("http://localhost:3333/smurfs", smurfData)
		.then(res => {
			dispatch({ type: POST_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: POST_FAIL, payload: err }));
};
