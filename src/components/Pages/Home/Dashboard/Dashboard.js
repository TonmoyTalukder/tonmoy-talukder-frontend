import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Typical from "react-typical";
import { Typewriter } from 'react-simple-typewriter'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ResearchGateIcon from '../../../images/researchgatlogo.png';
import GoogleScholar from '../../../images/googleScholar.jpg';
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';

import tonmoyBlack from '../../../images/tonmoy-informal-black.png';
import tonmoyFormal from '../../../images/Tonmoy-Talukder.png';

import { Button, Grid } from '@mui/material';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experiences from '../Experiences/Experiences';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Details from '../Details/Details';
import AllProjects from '../AllProjects/AllProjects';
import Blogs from '../Blog/Blogs/Blogs';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';


// 05 January 2022 Start
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Container from '@mui/material/Container';

import SummarizeIcon from '@mui/icons-material/Summarize';

import './Dashboard.css';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
// 05 January 2022 End

// <FontAwesomeIcon icon="fa-brands fa-researchgate" />
const drawerWidth = 240;


function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'transparent',
        color: 'white',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="overflow-auto" style={{backgroundColor: '#393939', height: '100vh', color: 'white'}}>
      <Toolbar />
      <List>
        <ListItem  style={{margin: "auto"}}>
            <img style={{width: '100px', margin: "auto"}} src={tonmoyBlack} alt="" />
        </ListItem>
        <ListItem >
            <Typography style={{margin: "auto"}} variant="h6" gutterBottom component="div">
                Tonmoy Talukder
            </Typography>
        </ListItem>
        <ListItem>
            <Box style={{margin: "auto"}}>
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
        </ListItem>
        <ListItem  style={{height: '130px'}}>
            <Typography style={{margin: "auto"}} variant="caption" gutterBottom component="div">
                {/* <Typical
                        loop={Infinity}
                        wrapper='span'
                        steps={[
                            "",
                            10000,
                            "",
                            10000,
                        ]}
                    /> */}
                    <span style={{ color: 'white', fontWeight: 'normal' }}>
                            
                        <Typewriter
                            words={['Full Stack Development is my passion to explore my thinkings through codes, through programming with my expertise areas and also through exploring whats new to me.', 'Communicating with the data to contribute to the field of Data Science, Machine Learning, Deep learning and Artificial intelligence for mankind is my pre-eminent ambition.']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={90}
                            deleteSpeed={70}
                            delaySpeed={3500}

                        />
                      </span>
                
            </Typography>
        </ListItem>
        <Divider />

        
        <a style={{textDecoration: "none", color: "white"}} href="/">
          <ListItem button>About</ListItem>
        </a>
        
        <Divider />

        {/* <a style={{textDecoration: "none", color: "white"}} href="/skills">
          <ListItem button>Skills</ListItem>
        </a>
        
        <Divider /> */}

        
        <a style={{textDecoration: "none", color: "white"}} href="/projects">
          <ListItem button>Projects</ListItem>
        </a>
        
        <Divider />

        
        {/* <a style={{textDecoration: "none", color: "white"}} href="/experiences">
          <ListItem button>Experiences</ListItem>
        </a>
        
        <Divider /> */}

        
        <a style={{textDecoration: "none", color: "white"}} href="/resume">
          <ListItem button>Resume</ListItem>
        </a>
        
        <Divider />

        {/* <a style={{textDecoration: "none", color: "white"}} href="/blogs">
          <ListItem button>Blogs <CallMadeSharpIcon/></ListItem>
        </a>
        
        <Divider /> */}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // 05 January 2022
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#393939',
          // backgroundColor: 'transparent',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },backgroundColor: '#393939'  }}
          >
            <MenuIcon />
          </IconButton>
          <Box style={{width: '100%'}}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 1,
                  m: 1,
                  bgcolor: 'transparent',
                }}
              >
                <Item className='dashboard-app-bar-menu-large'><a className="download-resume" style={{textDecoration: 'none', color: '#ECE9E9', border: '0px solid gray', borderRadius: '5px', padding: '10px'}} href="/skills" >Skills</a></Item>
                {/* <Item>Item 2</Item> */}
                <Item className='dashboard-app-bar-menu-large'><a className="download-resume" style={{textDecoration: 'none', color: '#ECE9E9', border: '0px solid gray', borderRadius: '5px', padding: '10px'}} href="/experiences" >Experiences</a></Item>
                <Item className='dashboard-app-bar-menu-large'><a className="download-resume" style={{textDecoration: 'none', color: '#ECE9E9', border: '0px solid gray', borderRadius: '5px', padding: '10px'}} href="/blogs" >Blogs</a></Item>
                
              </Box>
              <Box className='dashboard-app-bar-menu-small'>
                  <div>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      // variant="contained"
                      style={{color: 'white'}}
                      disableElevation
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      <SummarizeIcon/>
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose} disableRipple>
                        <a className="download-resume" style={{textDecoration: 'none', fontWeight: 'bold', color: 'gray', border: '0px solid gray', borderRadius: '5px', padding: '10px'}} href="/skills" >Skills</a>
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <a className="download-resume" style={{textDecoration: 'none', fontWeight: 'bold', color: 'gray', border: '0px solid gray', borderRadius: '5px', padding: '10px'}} href="/experiences" >Experiences</a>
                      </MenuItem>
                      {/* <Divider sx={{ my: 0.5 }} /> */}
                      <MenuItem onClick={handleClose} disableRipple>
                        <a className="download-resume" style={{textDecoration: 'none', fontWeight: 'bold', color: 'gray', border: '0px solid gray', borderRadius: '5px', padding: '10px'}} href="/blogs" >Blogs</a>
                      </MenuItem>
                    </StyledMenu>
                  </div>
                </Box>
          </Box>
        </Toolbar>
        {/* <Box style={{color: "gray", display: "flex", justifyContent: "flex-end", alignContent: "center", marginTop: "-30px", paddingRight: "30px"}}>
              <Button style={{border: '1px solid gray', backgroundColor: "white"}}><a style={{color: 'gray', textDecoration: 'none', fontWeight: '25px'}} href="/blog">Blog <RssFeedIcon/></a></Button>
        </Box> */}
      </AppBar>
      </HideOnScroll>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            // backgroundColor: '#393939',
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            // backgroundColor: '#393939',
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <About/>
                    </Route>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route exact path="/projects">
                        <AllProjects/>
                    </Route>
                    <Route exact path="/experiences">
                        <Experiences/>
                    </Route>
                    <Route exact path="/resume">
                        <Resume/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/project-details/:projectId">
                        <Details/>
                    </Route> 
                    <Route exact path="/blogs">
                        <Blogs/>
                    </Route> 
                </Switch>
            </Router> 
      </Box>
      {/* <ScrollTop {...props}>
        <Fab style={{color: "gray"}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
