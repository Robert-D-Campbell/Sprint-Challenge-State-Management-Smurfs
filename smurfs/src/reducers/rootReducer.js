import {
	START_FETCHING,
	FETCH_SUCCESS,
	FETCH_FAIL,
	START_POSTING,
	POST_SUCCESS,
	POST_FAIL
} from "../actions";

const initialState = {
	smurfList: [],
	isFetching: false,
	isPosting: false,
	error: ""
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching: true,
				error: ""
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: "",
				smurfList: action.payload
			};
		case FETCH_FAIL:
			return {
				...state,
				err: action.payload,
				isFetching: false
			};
		case START_POSTING:
			return {
				...state,
				isPosting: true
			};
		case POST_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isPosting: false,
				error: ""
			};
		case POST_FAIL:
			return {
				...state,
				error: action.payload,
				isPosting: false
			};
		default:
			return state;
	}
};
