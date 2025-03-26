import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-5 mb-10">
                <h2 className="text-5xl font-bold">Hot Jobs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    jobs.map((job) => <HotJobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;