const reducer = (state = "mr john", action) => {
    if (action.type == "change") {
        state = action.payload
        return state
    } else {
        return state;
    }
}

export default reducer;