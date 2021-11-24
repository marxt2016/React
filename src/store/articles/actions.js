import { apiUrl } from "../../components/utils";

export const REQUEST_ARTICLES_LOADING = "ARTICLES::REQUEST_LOADING";
export const REQUEST_ARTICLES_FAILURE = "ARTICLES::REQUEST_FAILURE";
export const REQUEST_ARTICLES_SUCCESS = "ARTICLES::REQUEST_SUCCESS";

export const getArticlesLoading = () => ({
    type: REQUEST_ARTICLES_LOADING
});

export const getArticlesSuccess = (articles) => ({
    type: REQUEST_ARTICLES_SUCCESS,
    payload: articles
});

export const getArticlesFailure = (error) => ({
    type: REQUEST_ARTICLES_FAILURE,
    payload: error
});

export const getArticles = () => async (dispatch) => {
    dispatch(getArticlesLoading());
    try {
        const resp = await fetch(apiUrl)
        if (!resp.ok) {
            throw new Error('Error')
        }
        const result = await resp.json();

        dispatch(getArticlesSuccess(result));

    } catch (error) {
        console.error(error);
        dispatch(getArticlesFailure(error.message));

    }
};