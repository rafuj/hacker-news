import {
	HANDLE_PAGE,
	HANDLE_SEARCH,
	REMOVE_STORY,
	SET_LOADING,
	SET_STORIES,
} from "./actions";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: true };
		case SET_STORIES:
			return {
				...state,
				isLoading: false,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
			};
		case REMOVE_STORY:
			return {
				...state,
				hits: state.hits.filter(
					(story) => story.objectID !== action.payload
				),
			};
		case HANDLE_PAGE:
			return { ...state };
		case HANDLE_SEARCH:
			return { ...state };
		default:
			throw new Error(`No Matching ${action.type} action type`);
	}
};
export default reducer;
