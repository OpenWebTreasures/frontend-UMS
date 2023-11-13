import { Link } from "react-router-dom";
import { BASEURL, LOGIN } from "../../routes";
import { useState } from "react";
import axios from "axios";

function Register() {

    const [formdata, setFormdata] = useState<{ username: "", email: "", password: "", confirmPassword: "" } | { username: string; email: string; password: string; confirmPassword: string; }>({});

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formdata && formdata.password !== formdata.confirmPassword) {
            console.error('Password and Confirm Password do not match');
            return;
        }
        console.log(formdata)

        await axios.post((BASEURL + "auth/register"), { username: formdata?.username, email: formdata?.email, password: formdata?.password })
            .then(response => {
                console.log("Response", response);
            })
            .catch((err) => {
                console.error('Error', err);
            });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormdata((prevFormData) => {
            if (prevFormData === null) {
                return null;
            }

            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    return (
        <div className="bg-main h-screen flex items-center justify-center">
            <div className="p-5 bg-white rounded-lg container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="w-1/2 mx-auto mb-4 max-w-xs" src="/UMS-logo.png" alt="Your Company" />

                    <h2 className="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-main">
                        Create an Account
                    </h2>
                </div>

                <div className="p-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm text-main font-bold leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-main font-bold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm text-main font-bold leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm text-main font-bold leading-6 text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:border-2 hover:border-blue-300 hover:bg-white hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500 text-main font-bold">
                        Already have an account?
                        <Link to={LOGIN} className="font-semibold leading-6 text-indigo-600 hover:text-main text-second font-bold">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
