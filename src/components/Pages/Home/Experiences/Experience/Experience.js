import React, {useEffect} from 'react';
import { Typography } from '@mui/material';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Experience.css';

const Experience = ({experience}) => {
    const { expName, orgName, date, description } = experience;
    
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
            <li data-aos="fade-up">
                <div className="timeline-content">
                    <Typography variant="overline" gutterBottom>
                        <h3 class="date">{date}</h3>
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        <span>{expName}</span>
                    </Typography>
                    <Typography variant="overline" gutterBottom>
                        <span>{orgName}</span>
                    </Typography>
                    {/* <br /> */}
                    <Typography variant="body2" gutterBottom>
                        <small>{description}</small>
                    </Typography>
                </div>
            </li>
    );
};

export default Experience;