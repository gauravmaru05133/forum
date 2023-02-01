import { TAB_INDEX } from "./reducers/TabIndexReducer";
import {  APP_CONSTANT} from "./reducers/AppConstant";
export const AddToRedux = (value, type) => {
    switch (type) {
        case APP_CONSTANT:
            return {
                type: APP_CONSTANT,
                payload: value
            }

        case TAB_INDEX:
            return {
                type: TAB_INDEX,
                payload: value
            }
        case LOGOUT:
            return {
                type: LOGOUT,
                payload: undefined
            }

        default:
            return '';
    }
}
