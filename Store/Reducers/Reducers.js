import { FETCH_BLOG_DATA, STORE_BLOG_DATA } from "../Actions/Actions";

const initialState = {
    posts: [],
    blogs: []
};

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_BLOG_DATA:
            return {
                ...state, posts: payload
            };
        case STORE_BLOG_DATA:
            console.log({...state, blogs: [...state.blogs, payload]})
            return {
                ...state, blogs: [...state.blogs, payload]
            };
        default:
            return state;
    }
};

export default rootReducer;