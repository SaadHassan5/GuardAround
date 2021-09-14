const initialState = {
    backgroundColor: 'red',
    Imgs:[]
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BACKGROUND_COLOR':
            return {
                ...state,
                backgroundColor: action.payload
            }
        case 'Get_Imgs':
            return {
                ...state,
                Imgs: action.payload
            }
        // break;

        default:
            return state;
    }
}