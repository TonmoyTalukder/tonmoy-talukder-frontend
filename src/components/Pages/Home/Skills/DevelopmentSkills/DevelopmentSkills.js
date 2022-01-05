import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DevelopmentSkills = () => {
    return (
        <div>
            <Typography style={{margin: "auto"}} variant="h3" gutterBottom component="div">
                <span>Full Stack Development Skills</span>                
            </Typography>
            <Box>
                <Typography style={{margin: "auto"}} variant="body1" gutterBottom component="div">
                    <p><b>Library/Framework:</b> React JS, Node JS, Express JS, React Router (V5 & V6), Hash Router, React Hook Form, JWT, Rest API, Material UI, Tailwind, Bootstrap</p>                
                </Typography>
                <Typography style={{margin: "auto"}} variant="body2" gutterBottom component="div">
                    <p><b>Familiar with:</b> React Native, Next JS, React Spring, AOS, Typescript</p>                
                </Typography>
            </Box>
        </div>
    );
};

export default DevelopmentSkills;