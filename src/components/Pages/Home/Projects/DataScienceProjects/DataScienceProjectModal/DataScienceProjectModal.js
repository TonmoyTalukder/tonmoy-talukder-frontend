import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DataScienceProjectModal = ({openProject, handleProjectClose, dsProject}) => {
    const{id, name, photo, projectType, objectives, gitHubRepository}= dsProject;
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openProject}
        onClose={handleProjectClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProject}>
          <Box sx={style} style={{width: '80vw', height: '80vh', overflowY: 'scroll'}}>
            <Box style={{overflowY: 'scroll', width: '100%'}}>
                <Box style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={photo} style={{width: '100%', height: '100%', padding: '1%'}} alt={name}/>
                </Box>
                <Typography id="transition-modal-title" variant="h3">
                {name}
                </Typography>
                <Typography id="transition-modal-title" variant="h5">
                {projectType}
                </Typography>
                <Typography id="transition-modal-title" variant="body2">
                {objectives}
                </Typography>
                <Box>
                    <Button style={{padding: '5px'}} size="small"><a target="_blank"  style={{textDecoration: 'none', color: 'white', backgroundColor: 'gray', padding: '5px'}} href={gitHubRepository}>GitHub Repository</a></Button>
                    
                    <Button style={{textDecoration: 'none', color: 'gray', border: '1px solid red', padding: '1px'}} onClick={handleProjectClose}>Close</Button>
                </Box>
                
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
};

export default DataScienceProjectModal;