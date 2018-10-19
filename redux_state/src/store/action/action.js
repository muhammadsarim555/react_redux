export const isLoaderAction = (updatedUserName) => {
    // console.log("Successful");

    return dispatch => {
        dispatch({
            type: "A",
            payload: updatedUserName
        })
        // console.log(updatedUserName , "updatedUserName fromaction")
    }
}