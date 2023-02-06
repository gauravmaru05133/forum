import { combineReducers,  createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { State } from "react-native-gesture-handler";
import TabIndexReducer from "./reducers/TabIndexReducer";
import AppConstantReducer from "./reducers/AppConstant";
import ScreenNameReducer from "./reducers/ScreenName";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: [''], // save
    blacklist: ['tabIndexReducer','appConstantReducer','screenNameReducer'] //Temporary 
}

const rootReducer = combineReducers({
    tabIndexReducer:TabIndexReducer,
    appConstantReducer:AppConstantReducer,
    screenNameReducer:ScreenNameReducer
});


const removeReducer = (state, action) => {
    // if (action.type === LOGOUT) {
    //     persistConfig.storage.removeItem('persist:root')
    //     state = undefined
    // }
    return rootReducer(state, action)
}

export const persistedReducer = persistReducer(persistConfig, removeReducer)
export const configureStore = createStore(persistedReducer);
export const persistor = persistStore(configureStore)
