import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data)
            })
    }, [user.email]);

    console.log(jobs);

    return (
        <div>
            <h2 className="text-4xl">My Posted Jobs : {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Title</th>
                            <th></th>
                            <th>Requirements</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, idx) => <tr key={idx}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    DeadLine: {job.applicationDeadline}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job.company}</span>
                                </td>
                                <td className="flex gap-2">
                                    {
                                        job.requirements.map(req => <p className="badge badge-ghost badge-sm">{req}</p>)
                                    }
                                </td>
                                <td>{job.applicationCount}</td>
                                <th>
                                    <Link to={`/viewApplications/${job._id}`} className="btn btn-ghost btn-xs">View Applications</Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;