const initialState = {
    screenName: ''
}

const ScreenNameReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SCREEN_NAME:
            return {
                ...state,
                screenName: action.payload
            };
        default:
            return state;
    }
}

export const SCREEN_NAME = 'SCREEN_NAME'
export default ScreenNameReducer;
