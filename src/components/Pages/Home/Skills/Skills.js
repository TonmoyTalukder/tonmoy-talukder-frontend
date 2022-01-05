import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
  } from "react-router-dom";

import DataScienceSkills from './DataScienceSkills/DataScienceSkills';
import DevelopmentSkills from './DevelopmentSkills/DevelopmentSkills';
import Languages from './Languages/Languages';
import Tools from './Tools/Tools';

import './Skills.css';

// ***********************************

// ***********************************


const Skills = () => {
    let { path, url } = useRouteMatch();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <Typography style={{margin: "auto"}} variant="h3" gutterBottom component="div">
                <span>My Skills</span>                
            </Typography>

            
            <Box style={{marginTop: '5px'}}>
                <nav>
                    <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                        <button class="nav-link textColor" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Data Science Skills</button>

                        <button class="nav-link textColor" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Development Skills</button>

                        <button class="nav-link textColor" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Tools</button>

                        <button class="nav-link textColor active" id="nav-language-tab" data-bs-toggle="tab" data-bs-target="#nav-language" type="button" role="tab" aria-controls="nav-language" aria-selected="false">Languages</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><DataScienceSkills/></div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><DevelopmentSkills/></div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><Tools/></div>
                    <div class="tab-pane fade show active" id="nav-language" role="tabpanel" aria-labelledby="nav-language-tab"><Languages/></div>
                </div>
            </Box>

            {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box> */}

            {/* <Box>
                <Button style={{borderBottom: '2px solid gray', borderRadius: '0px', margin: '5px'}}><a style={{color: 'gray', textDecoration: 'solid black 2px'}} href={`${url}/dataScience-skills`}>Data Science Skills</a></Button>
                <Button style={{borderBottom: '2px solid gray', borderRadius: '0px', margin: '5px'}}><a style={{color: 'gray', textDecoration: 'solid black 2px'}} href={`${url}/development-skills`}>Development Skills</a></Button>
                <Button style={{borderBottom: '2px solid gray', borderRadius: '0px', margin: '5px'}}><a style={{color: 'gray', textDecoration: 'solid black 2px'}} href={`${url}`}>Languages I Know</a></Button>
                <Button style={{borderBottom: '2px solid gray', borderRadius: '0px', margin: '5px'}}><a style={{color: 'gray', textDecoration: 'solid black 2px'}} href={`${url}/tools`}>Tools</a></Button>
            </Box>
            <Box>
                <Router>
                    <Switch>
                        <Route exact path={`${path}/dataScience-skills`}>
                            <DataScienceSkills/>
                        </Route>
                        <Route exact path={`${path}/development-skills`}>
                            <DevelopmentSkills/>
                        </Route>
                        <Route exact path={`${path}`}>
                            <Languages/>
                        </Route>
                        <Route exact path={`${path}/tools`}>
                            <Tools/>
                        </Route>
                    </Switch>
                </Router>
            </Box> */}
        </div>
    );
};

export default Skills;