import React from 'react';
import Project from "./Project";
import {Box, Grid} from "@mui/material";
import {ProjectNav} from "./ProjectNav";

export default function ProjectsList({ projects }) {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {projects.map((p, index) => (
                    <Grid item xs={2} sm={3} md={3} key={index}>
                        <Project project={p}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
        //
        // <Grid container xs={12} spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        //     <Grid item xs={3}>
        //         <ul>
        //             {projects.map((p) => (
        //                 <Project project={p} key={p.id} />
        //             ))}
        //         </ul>
        //     </Grid>
        // </Grid>

    );
}