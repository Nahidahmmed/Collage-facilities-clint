import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const Register = () => {
   
   
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Sign up Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            });
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg md:p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your Name"
                            />
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                placeholder="Password"
                            />                       
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <button
                            className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg md:mr-4"
                        >
                            Continue with Google
                        </button>
                        <button
                            className="w-full md:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg"
                        >
                            Continue with Facebook
                        </button>
                    </div>
                    <p className="mt-4 text-center">
                        Have an account?{' '}
                        <Link to="/login" className="text-blue-500 underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;