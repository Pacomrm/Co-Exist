import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// export const CATEGORIES = ['agriculture', 'food', 'transportation', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
// const initialStateProject = Object.fromEntries(CATEGORIES.map(category => [category, []]))
const API_URL = "http://localhost:3000/projects";
const API_URL_ODS = "http://localhost:3000/ods";

// export const project = createSlice({
//     name: 'project',
//     initialState: initialStateProject,
//     reducers: {
//         createProject(state, action) {},
//         updateProject(state, action) {},
//         deleteProject(state, action) {},
//     },
// })

// // Extract the action crweators object and the reducer
// const { actions, reducer } = projectSlice
// // Extract and export each action creator by name
// export const { createPost, updatePost, deletePost } = actions
// // Export the reducer, either as a default or named export
// export default reducer


export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        allProjects: [{}],
        allODSs:[]
    },
    reducers: {
        loadProjects: (state, action) => {
            state.allProjects = action.payload;
        },
        loadODSs: (state, action) =>{
            state.allODSs = action.payload;
        }
    },
})

export default projectsSlice.reducer;
export const {loadProjects, loadODSs} = projectsSlice.actions;
export const selectAllProjects = (state) => state.projects.allProjects;
export const selectAllODS = (state) => state.projects.allODSs;

console.log(projectsSlice)

/* Actions for slice Projects */
export const loadAllProjects = () => async dispatch => {
    try{
        const allProjectsRes = await axios.get(`${API_URL}`);
        dispatch(loadProjects(allProjectsRes.data));
        // console.log("inside all projects",allProjectsRes)
    }catch(e){
        return console.error(e.message);
    }
}
/*Actions for filter ods*/
export const loadAllODSs = () => async dispatch => {
    try{
        const allODSRes = await axios.get(`${API_URL_ODS}`);
        dispatch(loadODSs(allODSRes.data));
        // console.log("inside all projects",allODSRes)
    }catch(e){
        return console.error(e.message);
    }
}
/*Action to get projects by ODS*/
// const getUser = (id) => {
//     return async (dispatch, getState) => {
//         const payload = await fetchUser(id)
//         dispatch({type: 'users/addUser', payload: payload})
//     }
// }
