export const FETCH_BLOG_DATA = 'FETCH_BLOG_DATA';
export const STORE_BLOG_DATA = 'STORE_BLOG_DATA';

export const fetchBlogData = (data) => {
    return { 
        type: FETCH_BLOG_DATA,
        payload: data 
    }
};

export const storeBlogData = (data) => {
    return { 
        type: STORE_BLOG_DATA,
        payload: data 
    }
};