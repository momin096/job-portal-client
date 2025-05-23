import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Signin from "../pages/SignIn/Signin";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute>
                    <JobDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute>
                    <JobApply />
                </PrivateRoute>,
            },
            {
                path: '/myApplications',
                element: <PrivateRoute>
                    <MyApplications />
                </PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute>
                    <AddJob />
                </PrivateRoute>
            },
            {
                path: 'myPostedJobs',
                element: <PrivateRoute>
                    <MyPostedJobs />
                </PrivateRoute>
            },
            {
                path: 'viewApplications/:job_id',
                element: <PrivateRoute>
                    <ViewApplications />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Signin />
            }
        ]
    },
]);

export default router;