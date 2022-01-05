import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
  import { Box } from '@mui/system';

import '../Projects/Projects';
import Projects from '../Projects/Projects';
import { Typography } from '@mui/material';
import DataScienceProjects from '../Projects/DataScienceProjects/DataScienceProjects';

const AllProjects = () => {
    let { path, url } = useRouteMatch();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <Typography variant="h2" gutterBottom component="div">
                My Projects
            </Typography>                
            <Box style={{marginTop: '5px'}}>
                <nav>
                    <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                        <button class="nav-link textColor" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Data Science Projects</button>

                        <button class="nav-link textColor active" id="nav-language-tab" data-bs-toggle="tab" data-bs-target="#nav-language" type="button" role="tab" aria-controls="nav-language" aria-selected="false">Web Dev Projects</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><DataScienceProjects/></div>

                    <div class="tab-pane fade show active" id="nav-language" role="tabpanel" aria-labelledby="nav-language-tab"><Projects/></div>
                </div>
            </Box>
        </div>
    );
};

export default AllProjects;