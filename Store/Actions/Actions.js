export const FETCH_BLOG_DATA = 'FETCH_BLOG_DATA';

export const fetchBlogData = (data) => {
    return { 
        type: FETCH_BLOG_DATA,
        payload: data 
    }
};