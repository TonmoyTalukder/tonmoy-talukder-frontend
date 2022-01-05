import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataScienceProject from './DataScienceProject/DataScienceProject';

const DataScienceProjects = () => {

    const [dsProjects, setDSProjects] = useState([]);

    useEffect(()=>{
        fetch("./datascienceprojects.json")
        .then(res=> res.json())
        .then(data=> setDSProjects(data));
    }, [])

    return (
        <div>
            <Typography style={{marginTop: '10px'}} variant="h4" gutterBottom component="div">
                My Data Science Projects
            </Typography>
            <div className="container">
                <div className="timeline">
                    <ul>
                        {
                            dsProjects.map(dsProject => <DataScienceProject
                                key={dsProject.id}
                                dsProject={dsProject}
                            ></DataScienceProject>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DataScienceProjects;