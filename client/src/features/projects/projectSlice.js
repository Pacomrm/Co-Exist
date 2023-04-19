import {createSlice} from '@reduxjs/toolkit';
import axios, {all} from 'axios';
import {useFetch} from '../../services/useFetch';
import {useSelector} from "react-redux";

const API_URL_BASE = "http://localhost:3000/";
const API_URL = "http://localhost:3000/projects";
const API_URL_ODS = "http://localhost:3000/ods";
const API_URL_LOCATIONS = "http://localhost:3000/locations";
const API_URL_NEEDS = "http://localhost:3000/needs";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        allProjects: [{}],
        allODSs:[],
        allLocations:[],
        allNeeds:[],
    },
    reducers: {
        loadProjects: (state, action) => {
            state.allProjects = action.payload;
        },
        loadODSs: (state, action) =>{
            state.allODSs = action.payload;
        },
        loadLocations: (state, action) =>{
            state.allLocations = action.payload;
        },
        loadNeeds: (state, action) =>{
            state.allNeeds = action.payload;
        }
    },
})

export default projectsSlice.reducer;
const {loadProjects, loadODSs, loadLocations,loadNeeds} = projectsSlice.actions;
export const selectAllProjects = (state) => state.projects.allProjects;
export const selectAllODS = (state) => state.projects.allODSs;
export const selectAllLocations = (state) => state.projects.allLocations;
export const selectAllNeeds = (state) => state.projects.allNeeds;

/* Action to load all projects from DataBase*/
export const loadAllProjects = () => async dispatch => {
    const allProjectsRes = await useFetch(API_URL);
    dispatch(loadProjects(allProjectsRes.data));
}
/*Action to load all needs*/
export const loadAllNeeds = () => async dispatch => {
    const allNeedsRes = await useFetch(API_URL_NEEDS);
    dispatch(loadNeeds(allNeedsRes.data));
}
/*Action to load all ods*/
export const loadAllODSs = () => async dispatch => {
    const allODSRes = await useFetch(API_URL_ODS);
    dispatch(loadODSs(allODSRes.data));
}
/*Action to load all locations*/
export const loadAllLocations = () => async dispatch => {
    const allLocationsRes = await useFetch(API_URL_LOCATIONS);
    dispatch(loadLocations(allLocationsRes.data));
}

/*One function to select projects according to the filter*/
export const loadProjectsByFilter = (filter, subFilter) => async (dispatch, getState) => {
    const actualProjects = await useFetch(API_URL);
    let filteredProjects =[];
    let activeMainFilter = '';
    Object.entries(filter).filter( ([val,i]) => {
        if(i === true) {
            activeMainFilter= val;
        }
    });
    try{
        actualProjects.data.map( project => {
            const keys = Object.keys(project);
            const values = Object.values(project);
            //**CHECK IF EACH OBJECT INCLUDES THE MAIN FILTER AND IF IT'S AN ARRAY **//
            if(keys.includes(activeMainFilter) && Array.isArray(project[activeMainFilter])){
                for (const keyObj of project[activeMainFilter]) {
                    if(keyObj === subFilter){
                        filteredProjects.push(project);
                    }
                }
                //** IF IS NOT AN ARRAY, JUST CHECK THE VALUE AGAINST THE SUB-FILTER **//
            }else if(project[activeMainFilter] === subFilter){
                filteredProjects.push(project);
            }
        });
        dispatch(loadProjects(filteredProjects));
    }catch(e){
        return console.error(e.message);
    }
}