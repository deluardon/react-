// import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-[#F9F9FF] text-black">
        <div className="flex justify-between flex-col items-center text-center pt-6 lg:flex-row-reverse lg:gap-32">
          <div>
          <img
            src="../../public/assets/images/user.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </div>
          <div>
            <h1 className="mt-8 lg:text-5xl font-bold">
              One Step Closer To Your <br /> <span className="text-green-600">Dream Job</span>
            </h1>
            <small className="my-4">
              Explore thousands of job opportunities with all the information you <br />
              need. Its your future. Come find it. Manage all your job application
              from start to finish.
            </small>
            <br />
            <button className="btn btn-primary mt-4 mb-4">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;