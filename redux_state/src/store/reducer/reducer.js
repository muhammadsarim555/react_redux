
const INITIAL_STATE = {
    name: "Sarim"
};

export default (state = INITIAL_STATE, action) => {
        // console.log(state.name)
    switch (action.type) {
        case "A":
        return ({
            ...state,
            name:action.payload
        })
        default:
            return state;
    }
}

