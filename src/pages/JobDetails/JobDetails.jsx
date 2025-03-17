import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();

    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;
    return (
        <div>
            <div className="py-10 px-20 bg-base-200">
                <div className="">
                    <div className='flex gap-3 items-center'>
                        <img className='w-20' src={company_logo} alt="" />
                        <h2 className='text-4xl font-bold'>{company}</h2>
                    </div>
                    <p className='font-semibold pl-2'>{location}</p>
                    <div className='space-y-2'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h3 className='text-2xl'>Job Type: {jobType}</h3>
                        <p>Joh Category: {category}</p>
                        <div>
                            <p className='text-xl font-semibold'>Requirements: </p>
                            {
                                requirements.map(req => <li>{req}</li>)
                            }
                        </div>
                        <div>
                            <p className='text-xl font-semibold'>Responsibilities:</p>
                            {
                                responsibilities.map(res => <li>{res}</li>)
                            }
                        </div>
                        <p className='text-lg'><span className='text-xl font-semibold'>Job Description:</span> <br />{description}</p>
                        <p>Job status: <span className='font-bold uppercase'>{status}</span></p>
                        <p>Deadline: <span className='font-medium'>{applicationDeadline}</span></p>
                        <p>Salary: <span className='font-semibold'>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</span></p>
                        <p className='font-medium'>HR: {hr_name}</p>
                        <p>HR Mail : <span className='font-medium'>{hr_email}</span></p>
                        <Link to={`/jobApply/${_id}`}>
                            <button className="btn btn-primary">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;