import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DataScienceSkills = () => {
    return (
        <div>
            <Typography style={{margin: "auto"}} variant="h3" gutterBottom component="div">
                <span>Data Science Skills</span>                
            </Typography>
            <Box>
                <Typography style={{margin: "auto"}} variant="body1" gutterBottom component="div">
                    <p><b>Expertise: </b> Data Analysis, Data Visualization</p>                
                </Typography>
                <Typography style={{margin: "auto"}} variant="body1" gutterBottom component="div">
                    <p><b>Comfortable: </b> Machine Learning Model Training</p>                
                </Typography>
            </Box>
        </div>
    );
};

export default DataScienceSkills;