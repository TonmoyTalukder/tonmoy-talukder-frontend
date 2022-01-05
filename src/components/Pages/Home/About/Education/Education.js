import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Education = () => {
    return (
        <Box textAlign="left" style={{marginTop: '20px'}}>
            <Box>
                <Typography variant="h4" gutterBottom component="div">
                    <h4>Bachelor of Science</h4>
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    <i>Bachelor of Science in Computer Science & Engineering (2018-Present)</i>
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <p>Ahsanullah University of Science & Technology, Dhaka-1208</p>
                </Typography>
            </Box>
            <Box>
                <Typography variant="h4" gutterBottom component="div">
                    <h4>High School</h4>
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    <i>Higher Secondary (2015-2017)</i>
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <p>Agriculture University College, Mymensingh 2202</p>
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    <i>Higher Secondary (2015)</i>
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <p>St. Joseph Higher Secondary School, Dhaka 1207</p>
                </Typography>
            </Box>
        </Box>
    );
};

export default Education;