import { GrProductHunt } from "react-icons/gr";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();

    // console.log(id, user);


    const handleSubmitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(linkedIn, github , resume);

        const jobApplication = {
            job_id : id, 
            applicant_email: user.email,
            linkedIn,
            github, 
            resume
        }

        fetch(`http://localhost:3000/job-applications`,{
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Applied",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }            
        })

    }

    return (
        <div className=" ">
            <form onSubmit={handleSubmitJobApplication} className="p-5 space-y-1">
                <fieldset className="fieldset max-w-xl mx-auto">
                    <legend className="fieldset-legend text-lg">LinkedIn URL</legend>
                    <input name="linkedIn" type="url" placeholder="LinkedIn URL" className="input w-full" />
                </fieldset>
                <fieldset className="fieldset max-w-xl mx-auto">
                    <legend className="fieldset-legend text-lg">GitHub URL</legend>
                    <input name="github" type="url" placeholder="GitHub URL" className="input w-full" />
                </fieldset>
                <fieldset className="fieldset max-w-xl mx-auto">
                    <legend className="fieldset-legend text-lg">Resume URL</legend>
                    <input name="resume" type="url" placeholder="Resume URL" className="input w-full" />
                </fieldset>
                <div className="flex  justify-center my-5">
                    <input type="submit" value="Apply" className="btn btn-primary px-10 " />

                </div>
            </form>
        </div>
    );
};

export default JobApply;