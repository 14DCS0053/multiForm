const initialState = {
    query: "",
    Data: [],
}
function reducer(state = initialState, action) {
    console.log('reducer', state, action);

    switch (action.type) {
        case 'UPDATE_QUERY':
            const { query } = action.payload;

            return {
                ...state,
                query
            };
        case 'UPDATE_DATA':
            const { Data } = action.payload;
            return {
                ...state, Data
            };
        default:
            return state;
    }
}
export default reducer;