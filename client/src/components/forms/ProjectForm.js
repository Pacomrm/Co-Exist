import React from 'react';
import {FormControl, Grid, Paper, styled, TextField} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const handleSubmit = () =>{
    console.log("submit")
}

export function ProjectForm (){
    return (
        <>
            <Grid container spacing={2}>
                <FormControl onSubmit={handleSubmit}>
                    <TextField id="standard-basic" label="Name" variant="standard" />
                    <TextField id="standard-basic" label="Description" variant="standard" />
                    <TextField id="standard-basic" label="Founder" variant="standard" />
                </FormControl>
            </Grid>
        </>
    )
}