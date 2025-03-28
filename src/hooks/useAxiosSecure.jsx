import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,

})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {

            if (error.status === 401 || error.status === 403) {
                logOut()
                    .then(res => {
                        console.log(res.data)
                        navigate('/login')
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }

            return Promise.reject(error)
        })
    }, [])

















    // const { logOut } = useAuth();
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axiosInstance.interceptors.response.use(response => {
    //         return response;
    //     }, error => {
    //         console.log('error caught in interceptor ->', error);

    //         if (error.status === 401 || error.status === 403) {
    //             console.log('need to logout');
    //             logOut()
    //                 .then(() => {
    //                     console.log('logout user');
    //                     navigate('/login')
    //                 })
    //                 .catch(err => console.log(err))
    //         }

    //         return Promise.reject(error)
    //     })
    // }, [logOut])


    return axiosInstance;
};

export default useAxiosSecure;