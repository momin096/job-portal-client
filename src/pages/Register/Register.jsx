import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

        // password validation 
        if (passwordRegex.test(password)) {
            createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error =>{
                console.log(error.code)
            })
        }
        else{
            console.log('password must one uppercase & one letter & at least 6 char')
        }
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-70px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-[500px]">
                        <Lottie animationData={registerLottieData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input text-xl" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input text-xl" placeholder="Password" />
                                <button className="btn btn-neutral mt-4 text-xl">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;