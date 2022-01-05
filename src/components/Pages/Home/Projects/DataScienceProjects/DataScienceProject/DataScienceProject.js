import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";
import DataScienceProjectModal from '../DataScienceProjectModal/DataScienceProjectModal';

const DataScienceProject = ({dsProject}) => {
    const{id, name, photo, projectType, objectives, gitHubRepository}= dsProject;

    const [openProject, setOpenProject] = React.useState(false);
    const handleProjectOpen = () => setOpenProject(true);
    const handleProjectClose = () => setOpenProject(false);

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <li>
            <div>
            <Card data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="timeline-content" className="project-card" sx={{ maxWidth: '343px', height: '100%'}}>
                    <CardMedia
                        component="img"
                        height="200"
                        width=""
                        image={photo}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                        {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                        {projectType}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"  className="project-card">
                                <p>{objectives.substring(0, 100)}...
                                    <Button onClick={handleProjectOpen} variant="" style={{color: 'gray', backgroundColor: 'transparent'}}>Read More</Button>
                                </p>
                                {/* <b>Technologies: </b>{technologies.substring(0, 55)}... */}
                        </Typography>
                    </CardContent>
                    <CardActions>

                        {/* <Button onClick={handleProjectOpen} variant="contained" style={{backgroundColor: 'gray'}}>Details</Button> */}

                        <Button size="small"><a style={{textDecoration: 'none', color: 'gray'}} target="_blank" href={gitHubRepository}>GitHub Repository</a></Button>
                        {/* <Button size="small"><a target="_blank" href={client}>Client Repository</a></Button>
                        <Button size="small"><a target="_blank" href={server}>Server Repository</a></Button> */}
                    </CardActions>
                </Card>


            </div>
            <DataScienceProjectModal
                    dsProject = {dsProject}
                    openProject = {openProject}
                    handleProjectClose = {handleProjectClose}
            ></DataScienceProjectModal>
        </li>
    );
};

export default DataScienceProject;