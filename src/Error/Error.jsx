// import React from 'react';

import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center ">
            <h1 className="text-5xl font-bold mt-20">Opps</h1>
            <Link className="btn btn-primary mt-24" to="/">Go Back</Link>
        </div>
    );
};

export default Error;