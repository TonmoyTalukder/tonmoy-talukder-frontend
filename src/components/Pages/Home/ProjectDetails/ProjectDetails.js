import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    let {projectId} = useParams();
    const [details, setDetails] = useState();

    // useEffect( () => {
    //     fetch("./webprojects.json")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])

    useEffect(() =>{
        fetch('./webprojects.json').then(response => {
            console.log("console log 1 ",response);
            return response.json();
          }).then(data => {
            // Work with JSON data here
            console.log("console log 2 ",data);
          }).catch(err => {
            // Do something for an error here
            console.log("console log 3 Error Reading data " + err);
          });
    }, [])

    // console.log("projectDetails: ", projectDetails);

    // useEffect(()=>{
    //     const newProjectDetails = projectDetails.find(projectDetails => projectDetails.id === projectId);
    //     setProjectDetails(newProjectDetails);
    // }, [projectDetails])

    return (
        <div>
            {projectId}
            {details?.name}
        </div>
    );
};

export default ProjectDetails;