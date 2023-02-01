const initialState = {
    tabId: 0
}

const TabIndexReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case TAB_INDEX:
            return {
                ...state,
                tabId: action.payload
            };
        default:
            return state;
    }
}

export const TAB_INDEX = 'TAB_INDEX'
export default TabIndexReducer;
