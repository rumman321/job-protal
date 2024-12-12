import React, { useEffect, useState } from 'react';
import HotjobCard from './HotjobCard';

const Hotjobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then((res)=>res.json())
        .then((data)=>{
            setJobs(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            <div>
                {
                    jobs.map(job => <HotjobCard key={job._id} job={job}></HotjobCard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;