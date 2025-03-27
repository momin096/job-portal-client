import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card bg-base-100 border-gray-300 border hover:shadow-2xl p-5">
            <div className=" flex gap-4">
                <figure className="mb-2">
                    <img
                        src={company_logo}
                        alt={title}
                        className="rounded-xl w-12" />
                </figure>
                <div className="items-center text-left">
                    <h2 className="card-title">{company}</h2>
                    <p className="flex items-center gap-1"><FaLocationDot />{location}</p>
                </div>
            </div>
            <div className="space-y-2 my-2">
                <h2 className="text-xl font-medium">{title}</h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        requirements?.map((skill, idx) => <p key={idx} className="border rounded-lg px-2 hover:bg-sky-100 cursor-pointer border-sky-500 hover:text-purple-700">{skill}</p>)
                    }
                </div>
                <p className="flex justify-start">Salary: {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}</p>
            </div>
            <div className="card-actions justify-end ">
                
                <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply</Link>
            </div>
        </div>
    );
};

export default HotJobCard;