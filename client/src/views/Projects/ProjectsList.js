import React from 'react';
import Project from "./Project";
import {Box, Grid} from "@mui/material";

export default function ProjectsList({ projects }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {projects.map((p, index) => (
                    <Grid item xs={4} sm={4} md={3} key={index}>
                        <Project project={p}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}