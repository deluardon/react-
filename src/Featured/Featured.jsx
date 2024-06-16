// import React from 'react';

import { useEffect, useState } from "react";
import Jobs from "../job/Jobs";

const Featured = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('../../public/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
            
            // .catch(err => console.log('solve error', err));
    }, []);
    return (
        <div className="text-black bg-white ">
            <h1 className="text-center text-5xl ">Featured Jobs</h1>
            <p className="text-center mt-4 pb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mx-12 pb-12 ">
            {/* <h1>jobs: {jobs.length}</h1> */}
            {
                jobs.slice(0, dataLength). map(job => <Jobs key={job.id} job={job}></Jobs>)
            }
            
        </div>
        <div className="text-center">
            <button onClick={() => setDataLength(dataLength + 4)}
            className="btn btn-primary mb-8">see oll jobs</button>
        </div>
        </div>
    );
};

export default Featured;