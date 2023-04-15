import * as React from 'react';
import Card from 'react-bootstrap/Card';
import {Button, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useState} from "react";
import imgProject from '../../assets/home/project_home.jpg'


export default function Project({project}){
    const [expand, setExpanded] = useState(false);
    const founders = ['Founders: '];
    const ods = ['ODS: '];

    if(project.ods !== ''){
        project.ods.forEach( o => {
            ods.push(o + ' - ');
        })
    }

    if(project.founders !== ''){
        project.founders.forEach( i => {
            founders.push(i + ' / ');
        })
    }
    function handleExpand(e){
        setExpanded(true);
        console.log("inside expand",e.target.name);

        if(expand){
            setExpanded(false);
            console.log("inside expand",expand);
        }

    }
    return (
        <div>
            {
                expand
                    ?
                        <Card md={{maxWidth:900}}>
                            <CardMedia
                                component="img"
                                md={{ height: 200}}
                                image={imgProject}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">{project.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                                <Typography>{ods}</Typography>
                                <Typography>{founders}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="big" onClick={handleExpand}>Cerrar</Button>
                            </CardActions>
                        </Card>
                :

                        <Card sx={{maxWidth: 130 }}>
                            <CardMedia
                                component="img"
                                sx={{ height: 140 }}
                                image={imgProject}
                                title={project.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">{project.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                                <Typography>{ods}</Typography>
                                <Typography>{founders}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleExpand}>Conocer</Button>
                            </CardActions>
                        </Card>




            }
        </div>
    )
}