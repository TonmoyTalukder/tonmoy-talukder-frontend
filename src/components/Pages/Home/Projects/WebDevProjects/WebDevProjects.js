import React, { useEffect, useState } from 'react';
import WebDevProject from './WebDevProject/WebDevProject';

const WebDevProjects = () => {
    const [webDevProjects, setWebDevProjects] = useState([]);

    useEffect(()=>{
        fetch("./webprojects.json")
        .then(res=> res.json())
        .then(data=> setWebDevProjects(data));
    }, [])
    return (
        <div>
            <div className="container">
                <div className="timeline">
                    <ul>
                        {
                            webDevProjects.map(webDevProject=> <WebDevProject
                                key={webDevProject.id}
                                webDevProject={webDevProject}
                            ></WebDevProject>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WebDevProjects;