export const isLoaderAction = (data) => {
    // console.log("Successful");

    return dispatch => {
        dispatch({
            type: "A",
            payload: data
        })
    }
}