import { Button, Card, CardActions, CardContent, CardMedia, duration, Grid, Typography } from '@mui/material';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from '../ProjectModal/ProjectModal';

import Aos from 'aos';
import "aos/dist/aos.css";

import './Project.css';

const Project = ({project}) => {
    const {id, name, photo, description, technologies, live, client, server} = project;

    const [openProject, setOpenProject] = React.useState(false);
    const handleProjectOpen = () => setOpenProject(true);
    const handleProjectClose = () => setOpenProject(false);

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <>
            <li>
                <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="timeline-content">
                <Card className="project-card" sx={{ maxWidth: '343px', height: '100%'}}>
                    <CardMedia
                        component="img"
                        height="200"
                        width=""
                        image={photo}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"  className="project-card">
                                <p>{description.substring(0, 100)}...</p>
                                <b>Technologies: </b>{technologies.substring(0, 55)}...
                        </Typography>
                    </CardContent>
                    <CardActions>
                            {/* <Link to={`/project-details/${id}`}>
                                <Button style={{backgroundColor: '#4a4a4a', color: 'white'}}>Details...</Button>
                            </Link> */}
                        
                            
                        
                        <Button onClick={handleProjectOpen} variant="contained" style={{backgroundColor: 'gray'}}>Details</Button>

                        {/* <Button size="small"><a target="_blank" href={live}>Live Website</a></Button>
                        <Button size="small"><a target="_blank" href={client}>Client Repository</a></Button>
                        <Button size="small"><a target="_blank" href={server}>Server Repository</a></Button> */}
                    </CardActions>
                </Card>
                </div>
            </li>
            {/* <Grid item xs={12} sm={12} md={12} style={{display: 'flex', justifyContent: 'center', paddingTop: '10px', margin:'10px'}}>
                
            </Grid> */}

            <ProjectModal
                project = {project}
                openProject = {openProject}
                handleProjectClose = {handleProjectClose}
            ></ProjectModal>
        </>
    );
};

export default Project;