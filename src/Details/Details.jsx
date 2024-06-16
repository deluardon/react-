// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const jobs = useLoaderData();
  const  {id}  = useParams();
  const idparseint = parseInt(id);
  const job = jobs.find((job) => job.id === idparseint);
  console.log(jobs);
  console.log(job);

  return (
    <div className="bg-white py-36 text-black">
      <h1 className="text-center text-5xl text-black font-medium">
        Job Details{" "}
      </h1>
      <div>
        <h1>Details{id}</h1>
        <h1>{job.logo}</h1>
      </div>
    </div>
  );
};

export default Details;
