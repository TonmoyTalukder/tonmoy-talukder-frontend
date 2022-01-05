import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let {projectId} = useParams();
    const [details, setDetails] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        fetch("./webprojects.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Details;