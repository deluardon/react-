// import React from 'react';

import { Link } from "react-router-dom";

const Jobs = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    id
  } = job;
  // console.log(job);
  return (
    <div className="card shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={logo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <p>{remote_or_onsite}</p>
    <p>{location}</p>
    <p>{job_type}</p>
    <p>{salary}</p>
    <p>{educational_requirements}</p>
    <div className="card-actions">
    <Link to={`/job/:${id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
  );
};

export default Jobs;
