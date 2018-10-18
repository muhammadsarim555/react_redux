export const isLoaderAction = (data) => {
    return dispatch => {
        dispatch({
            type: "A",
            payload: data
        })
    }
}