import { Button, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import tonmoyFormal from '../../../images/Tonmoy-Talukder.png';
import Typical from "react-typical";
import { Typewriter } from 'react-simple-typewriter'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ResearchGateIcon from '../../../images/ResearchGate.png';
import ComputerSharpIcon from '@mui/icons-material/ComputerSharp';import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import tonmoyBlack from '../../../images/tonmoy-informal-black.png';
import CodingSites from './CodingSites/CodingSites';
import Education from './Education/Education';

import mernStack from '../../../images/HomeSkills/mernstack.png';
import dataScience from '../../../images/HomeSkills/datascience.png';
import machineLearning from '../../../images/HomeSkills/machinelearning.png';

import './About.css';

const About = () => {
    
    return (
        <div>
            <figure>
                <blockquote cite="https://www.goodreads.com/quotes/7936948-programming-isn-t-about-what-you-know-it-s-about-what-you">
                    <p><i>Programming isn't about what you know, it's about what you can figure out.</i></p>
                </blockquote>
                <figcaption>—Chris Pine, <cite>Learn to Program</cite></figcaption>
            </figure>
            <Divider/>
            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                <Grid item xs={12} sm={12} md={12} sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <Typography variant="h2" gutterBottom component="div" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        Hi! I am Tonmoy Talukder
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {/* <Typography variant="h4" gutterBottom component="div" sx={{height:'100px'}}>
                        I am {" "}
                        <Typical
                            loop={Infinity}
                            wrapper='span'
                            steps={[
                                "a Full Stack Developer",
                                3000,
                                "a MERN Stack Developer",
                                3000,
                                "a React Developer",
                                3000,
                                "a Software Engineer",
                                3000,
                                "a Data Scientist",
                                3000,
                                "an AI & ML Enthusiastic",
                                3000,
                                "an Apprentice in Data Science & Machine Learning",
                                3000,
                                "a CS Undergrad @ AUST",
                                3000,
                            ]}
                        />
                    </Typography>  */}
                    <Typography variant="h4" gutterBottom component="div" sx={{height:'150px'}}>
                        I am {" "}
                        <span style={{ color: '#665F5D', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['a Full Stack Developer', 'a MERN Stack Developer', 'a React Developer', 'a Software Engineer', 'a Data Scientist', 'an AI & ML Enthusiastic', 'an Apprentice in Data Science & Machine Learning', 'a CS Undergrad @ AUST']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={90}
                                deleteSpeed={70}
                                delaySpeed={2000}

                            />
                        </span>
                    </Typography> 
                </Grid>
            </Grid>
        </Box>      
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 6 }}>
                <Grid item xs={12} sm={12} md={6} sx={{display: 'flex', alignContent: 'center'}}>
                    <Typography variant="p" gutterBottom component="div" sx={{display: 'flex', alignItems: 'center'}}>
                            <p style={{textAlign:'left'}}>Hi there! I am Tonmoy, a CS undergrad at Ahsanullah University of Science & Technology. Data science, machine learning, deep learning, and artificial intelligence are some of my favorite computer science fields. Despite the fact that web development has always attracted my curiosity. I have MERN Stack development expertization. Python development, as well as Android and iOS app development, are also areas of interest for me.
                            <br/>
                            <br/>
                            I enjoy reading blogs about literature, history, and technology in addition to them.</p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{width: '300px', margin: "auto"}} src={tonmoyFormal} alt="" />
                </Grid>
            </Grid>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={4}>
                    <img src={mernStack} alt="" style={{width: '200px'}} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img src={dataScience} alt="" style={{width: '200px'}} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img src={machineLearning} alt="" style={{width: '200px'}} />
                </Grid>
            </Grid>

            {/* <Divider/> */}

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{paddingTop: '15px'}}>
                <Grid item xs={12} sm={12} md={4}>
                    <Button style={{marginTop: "1%"}}><a className="download-resume" style={{textDecoration: 'none', color: 'gray', border: '1px solid gray', borderRadius: '5px', padding: '10px'}} href="/skills" >All About My Skills</a></Button>
                    <Divider style={{marginTop: '15px'}} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Button style={{marginTop: "1%"}}><a className="download-resume" style={{textDecoration: 'none', color: 'gray', border: '1px solid gray', borderRadius: '5px', padding: '10px'}} href="/projects" >My Projects</a></Button>
                    <Divider style={{marginTop: '15px'}} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Button style={{marginTop: "1%"}}><a className="download-resume" style={{textDecoration: 'none', color: 'gray', border: '1px solid gray', borderRadius: '5px', padding: '10px'}} href="/experiences" >My Experiences</a></Button>
                    <Divider style={{marginTop: '15px'}} />
                </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{paddingTop: '40px'}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box textAlign="left">
                        <Typography variant="h4" gutterBottom>
                            <span> <ComputerSharpIcon/> Where I like to explore myself...</span>
                        </Typography>
                        <Divider/>
                        <CodingSites/>
                    </Box>                
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Box textAlign="left">
                        <Typography variant="h4" gutterBottom>
                            <span> <AccountBalanceOutlinedIcon/> Education</span>
                        </Typography>
                        <Divider/>
                        <Education />
                    </Box>
                </Grid>
            </Grid>

            <Divider/>

            
{/* style={{backgroundColor: "#393939"}} */}
            <Box > 
                {/* Footer */}
                
                <List>
        <ListItem  style={{margin: "auto"}}>
            <img style={{width: '50px', margin: "auto"}} src={tonmoyBlack} alt="" />
        </ListItem>
        <ListItem >
            <Typography style={{margin: "auto"}} variant="h5" gutterBottom component="div">
                Tonmoy Talukder
            </Typography>
        </ListItem>
        <Button style={{marginTop: "1%"}}><a className="download-resume" style={{textDecoration: 'none', color: 'gray', border: '1px solid gray', borderRadius: '5px', padding: '10px'}} href="/contact" > <MarkEmailUnreadIcon/> Contact with me</a></Button>
        {/* <ListItem>
            <Box style={{margin: "auto", backgroundColor: "gray"}}>
                <span style={{padding: "5px"}}>
                    <a target="_blank" style={{textDecoration: "none", color: "white"}} href="https://twitter.com/TonmoyTweets"><TwitterIcon/></a>
                </span>
                <span style={{padding: "5px"}}>
                    <a target="_blank" style={{textDecoration: "none", color: "white"}} href="https://www.linkedin.com/in/tonmoytalukder/"><LinkedInIcon/></a>
                </span>
                <span style={{padding: "5px"}}>
                    <a target="_blank" style={{textDecoration: "none", color: "white"}} href="https://github.com/TonmoyTalukder"><GitHubIcon/></a>
                </span>
                <span style={{padding: "5px"}}>
                    <a target="_blank" style={{textDecoration: "none", color: "white"}} href="https://scholar.google.com/citations?user=bCxUNNAAAAAJ"><SchoolIcon/></a>
                </span>
                <span style={{padding: "5px"}}>
                    <a target="_blank" style={{textDecoration: "none", color: "white"}} href="https://www.researchgate.net/profile/Tonmoy-Talukder-2">
                      <img style={{width: '20px'}} src={ResearchGateIcon} alt="" />
                    </a>
                </span>
            </Box>
        </ListItem> */}
        </List>
            </Box>
        </Box>
        </div>
    );
};

export default About;