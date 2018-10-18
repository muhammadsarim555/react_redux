
const INITIAL_STATE = {
    name: 'Sarim'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "A":
        return ({
            ...state,
            name:"Maaz"
        })
        default:
            return state;
    }
}

