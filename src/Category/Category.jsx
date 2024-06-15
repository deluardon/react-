// import React from 'react';

const Category = () => {
  return (
    <div className="bg-white py-36 text-black">
      <h1 className="text-center text-5xl text-black font-medium">Job Category List</h1>
        <p className="text-center pt-4">  Explore thousands of job opportunities with all the information you
        need. Its your future</p>
      <div className="mt-20 grid mx-auto px-8 grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
        <div className=" rounded-lg bg-slate-200 text-center">
        <div className="mx-auto w-16 bg-slate-300 mt-4">
                <img className="mx-auto p-4" src="../../public/assets/icons/accounts.png" alt="" />

            </div>
            <h4 className="mt-8">Account & Finance</h4>
            <h5 className="mt-4">300 Jobs Available</h5>
        </div>
        <div className=" rounded-lg bg-slate-200 text-center">
            <div className="mx-auto w-16 bg-slate-300 mt-4">
                <img className="mx-auto p-4" src="../../public/assets/icons/calendar.png" alt="" />

            </div>
            <h4 className="mt-8">Account & Finance</h4>
            <h5 className="mt-4">300 Jobs Available</h5>
        </div>
        <div className=" rounded-lg bg-slate-200 text-center">
        <div className="mx-auto w-16 bg-slate-300 mt-4">
                <img className="mx-auto p-4" src="../../public/assets/icons/chip.png" alt="" />

            </div>
            <h4 className="mt-8">Account & Finance</h4>
            <h5 className="mt-4">300 Jobs Available</h5>
        </div>
        <div className=" rounded-lg bg-slate-200 text-center">
        <div className="mx-auto w-16 bg-slate-300 mt-4">
                <img className="mx-auto p-4" src="../../public/assets/icons/creative.png" alt="" />

            </div>
            <h4 className="mt-8">Account & Finance</h4>
            <h5 className="my-4">300 Jobs Available</h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
