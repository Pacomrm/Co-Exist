import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {projectsSlice} from '../features/projects/projectSlice.js'

const reducer = combineReducers({
    projects: projectsSlice.reducer,
});
// console.log("store",projectsSlice);


const preloadedState = {
    allProjects: [
        {
            "id": 1000,
            "name": "json-server",
            "description": "testing",
            "founders": ["julio","carmen","pedro"],
            "ods": ["rights","envrioment"],
            "objectives": ["1","2"],
            "location": "here",
            "needs": ["this","that"]
        }
    ],
    allODSs: ['o1','o2','o3'],
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    // enhancers: [batchedSubscribe(debounceNotify)],
});
export default store;