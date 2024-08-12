// initialize state
const initialState = {
    counterValue: 0,
    message: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counterValue: state.counterValue + 1 };
        default:
            return state;
    }
}

export default rootReducer