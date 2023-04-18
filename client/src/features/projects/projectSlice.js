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

/* Action to load all projects initially */
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
export const loadProjectsByFilterArray = (name,filterType) => async dispatch => {
    try{
        let categoryFilter = [];
        categoryFilter = Object.entries(filterType).filter( ([val,i]) => i === true);
        let filterFinal = categoryFilter[0][0];

        const allProjects = await axios.get(`${API_URL}`);
        let projectsFiltered =[];
        allProjects.data.map( project => {
            project[filterFinal].map( o => {
                if(o === name){
                    projectsFiltered.push(project);
                }
            })
        })
        dispatch(loadProjects(projectsFiltered));

    }catch(e){
        return console.error(e.message);
    }
}


/*Action to get projects by ODS*/
export const loadProjectsByLocation = (locationName) => {
    return async (dispatch, getState) => {
        const actualProjects = getState().projects.allProjects;
        console.log(actualProjects);
        let filteredProjects =[];
        actualProjects.map( project => {
            console.log(project.location);
            if(project.location === locationName){
                filteredProjects.push(project);
            }
        })
        dispatch(loadProjects(filteredProjects));
    }
}
