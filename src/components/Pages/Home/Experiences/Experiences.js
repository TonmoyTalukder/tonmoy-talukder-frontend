import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import './Experiences.css';
import Experience from './Experience/Experience';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(()=>{
        fetch("./experiences.json")
        .then(res=> res.json())
        .then(data=> setExperiences(data));
    }, [])
    return (
        <div>
            <Typography variant="h3" gutterBottom component="div">
                <span>Experiences</span>
            </Typography>
            
            <div className="container">
                <div className="timeline">
                    <ul>
                        {
                            experiences.map(experience => <Experience
                                key={experience.id}
                                experience={experience}
                            ></Experience>)
                        }
                    
                    {/* <li>
                        <div class="timeline-content">
                        <h3 class="date">20th may, 2010</h3>
                        <h1>Heading 2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                        <h3 class="date">20th may, 2010</h3>
                        <h1>Heading 3</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                        <h3 class="date">20th may, 2010</h3>
                        <h1>Heading 4</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
                        </div>
                    </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experiences;