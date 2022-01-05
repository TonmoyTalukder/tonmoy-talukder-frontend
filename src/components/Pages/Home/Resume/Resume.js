import { Button } from '@mui/material';
import React from 'react';
import CloudDownloadSharpIcon from '@mui/icons-material/CloudDownloadSharp';

import './Resume.css';
import resume from '../../../files/Tonmoy-Talukder-Resume-Full-Stack-Developer.pdf';

const Resume = () => {
    return (
        <div>
            <Button><a className="download-resume" style={{textDecoration: 'none', color: 'gray', border: '1px solid gray', borderRadius: '5px', padding: '10px'}} href={resume} download="Tonmoy Talukder Resume Junior Web Developer"> <CloudDownloadSharpIcon/> Download: Resume
                        of TONMOY TALUKDER</a></Button>

            <embed src={resume} alt="Tonmoy-Talukder-Resume-Full-Stack-Developer" type="application/pdf" width="100%" height="1000px" />
        </div>
    );
};

export default Resume;