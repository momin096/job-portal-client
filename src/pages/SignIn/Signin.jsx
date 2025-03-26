import Lottie from "lottie-react";
import loginLottieData from '../../assets/lottie/login.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {

    const { signInUser, setUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                setUser(result.user);
                console.log('userLogin :', result.user);

                const user = { email: email };
                axios.post(`http://localhost:3000/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                // navigate(from);

            })
            .catch(error => {
                console.log(error.code);
            })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-70px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96">
                        <Lottie animationData={loginLottieData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input text-xl" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input text-xl" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4 text-xl">Sign In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;