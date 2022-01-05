import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import Project from './Project/Project';
import './Projects.css';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch("./webprojects.json")
        .then(res=> res.json())
        .then(data=> setProjects(data));
    }, [])

    return (
        <div>
            <Typography style={{marginTop: '10px'}} variant="h4" gutterBottom component="div">
                My Web Dev Projects
            </Typography>             
            {/* <Box className="container" sx={{ width: '100%' }}>
                <Grid className="timeline" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 4, md: 4 }} style={{display: 'flex', justifyContent: 'center'}}>
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        ></Project>)
                    }
                </Grid>
            </Box> */}
            <div className="container">
                <div className="timeline">
                    <ul>
                        {
                            projects.map(project => <Project
                                key={project.id}
                                project={project}
                            ></Project>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;