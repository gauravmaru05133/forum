const initialState = {
    appConstant: ''
}

const AppConstantReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case APP_CONSTANT:
            return {
                ...state,
                appConstant: action.payload
            };
        default:
            return state;
    }
}

export const APP_CONSTANT = 'APP_CONSTANT'
export default AppConstantReducer;
