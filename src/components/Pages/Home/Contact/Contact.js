import { Typography } from '@mui/material';
import React from 'react';
import { ContactUs } from './EmailJs/EmailJs';

const Contact = () => {
    return (
        <div>
            <Typography variant="h3" gutterBottom component="div">
                <span>Contact With Me</span>
            </Typography>
            <ContactUs/>
        </div>
    );
};

export default Contact;