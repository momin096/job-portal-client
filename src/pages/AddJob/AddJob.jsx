import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {

    const { user } = useAuth();
    const navigate = useNavigate();


    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        const { min, max, currency, ...newJob } = initialData;

        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:3000/jobs   ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/myPostedJobs')
                }
            })


    }

    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-5">Add job</h2>
            <form onSubmit={handleAddJob} className="p-5 space-y-1 grid grid-cols-2 gap-2 space-x-10">
                {/* Job Title */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Job Title</legend>
                    <input name="title" type="text" placeholder="Job Title" className="input w-full" />
                </fieldset>
                {/* Job location */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Job Location</legend>
                    <input name="location" type="text" placeholder="Job Location" className="input w-full" />
                </fieldset>
                {/* Job Type */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Job type</legend>
                    <select name="jobType" defaultValue="Pick a Job Type" className="select w-full">
                        <option disabled={true} hidden>Pick a Job Type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                </fieldset>
                {/* Job category */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Job Field</legend>
                    <select name="category" defaultValue="Pick a Job Field" className="select w-full">
                        <option disabled={true} hidden>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </fieldset>
                {/* Status */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Status</legend>
                    <select name="status" defaultValue="active" className="select w-full">
                        <option>active</option>
                        <option>disabled</option>
                    </select>
                </fieldset>
                {/* Company Name */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Company Name</legend>
                    <input name="company" type="text" placeholder="Company Name" className="input w-full" />
                </fieldset>
                {/* Company Logo */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Company Logo</legend>
                    <input name="company_logo" type="url" placeholder="LOGO URL" className="input w-full" />
                </fieldset>
                {/* HR Name */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">HR Name</legend>
                    <input name="hr_name" type="text" placeholder="HR Name" className="input w-full" />
                </fieldset>
                {/* HR Email */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">HR Email</legend>
                    <input defaultValue={user?.email} name="hr_email" type="email" placeholder="HR Email" className="input w-full" />
                </fieldset>

                {/* Application Deadline */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Application Deadline</legend>
                    <input type="datetime-local" name="applicationDeadline" id="" className="input w-full" />
                </fieldset>

                {/* Salary range */}
                <div className="flex gap-4 items-end col-span-2">
                    <fieldset className="fieldset flex-1">
                        <legend className="fieldset-legend text-lg">Salary Range</legend>
                        <input name="min" type="text" placeholder="Minimum" className="input w-full" />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <input name="max" type="text" placeholder="Maximum" className="input w-full" />
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                        <select name="currency" defaultValue="Pick a Currency" className="select w-full">
                            <option disabled={true} hidden>Pick a Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>DIRHAM</option>
                        </select>
                    </fieldset>
                </div>
                {/* Requirements */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Requirements</legend>
                    <textarea name="requirements" placeholder="Each requirements in a new line" className="textarea w-full h-40"></textarea>
                </fieldset>
                {/* Responsibilities */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Responsibilities</legend>
                    <textarea name="responsibilities" placeholder="Each Responsibilities in a new line" className="textarea w-full h-40"></textarea>
                </fieldset>
                {/* Description */}
                <fieldset className="fieldset col-span-2">
                    <legend className="fieldset-legend text-lg">Description</legend>
                    <textarea name="description" placeholder="Description" className="textarea w-full h-40"></textarea>
                </fieldset>


                <div className="flex items-center justify-center col-span-2">
                    <input type="submit" value="Add " className="btn btn-primary px-10 " />
                </div>
            </form>
        </div>
    );
};

export default AddJob;