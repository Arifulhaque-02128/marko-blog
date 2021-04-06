import { FETCH_BLOG_DATA } from "../Actions/Actions";

const initialState = {
    posts: []
};

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_BLOG_DATA:
            return {
                ...state, posts: payload
            };
        default:
            return state;
    }
};

export default rootReducer;