import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id) 
        const data = {
            status : e.target.value
        }

        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <h3 className="text-5xl text-center font-bold my-5"> Applications : {applications.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((app, idx) => <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{app.applicant_email}</td>
                                <td>{app.linkedIn}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || "Change Status"} className="select select-sm">
                                        <option disabled={true} hidden>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;