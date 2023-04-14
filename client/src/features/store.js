import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {projectsSlice} from '../features/projects/projectSlice.js'

const reducer = combineReducers({
    projects: projectsSlice.reducer,
});

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
    allLocations: ["San Jose, Costa Rica"],
    allNeeds: ["Clothes","Tools","Money"]
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    // enhancers: [batchedSubscribe(debounceNotify)],
});
export default store;