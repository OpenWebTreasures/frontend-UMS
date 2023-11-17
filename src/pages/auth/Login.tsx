/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import { setUser } from "../../store/actions/user";
import { Dispatch } from "redux";
import { RootState } from "../../store/reducers";
import User from "../../interfaces/userInterface";
import axios, { AxiosResponse } from "axios";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { useState } from "react";
import { REGISTER } from "../../routes";
import { setAccessToken } from "../../store/actions/system";

interface Props {
    username: string;
    roles: string[];
    firstname: string;
    lastname: string;
    token: string;
    setAccessToken?: (accessToken: string) => void;
}

function Login(props: Partial<Props>) {

    const navigate: NavigateFunction = useNavigate();

    const [loginErr, setLoginErr] = useState(false);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Fetch the user's login information (e.g., username and password) from the form
        const usernameInput = event.currentTarget.username.value;
        const passwordInput = event.currentTarget.password.value;

        try {
            await axios.post("http://localhost:8080/auth/login", {
                username: usernameInput,
                password: passwordInput,
            }).then((response: AxiosResponse) => {
                const accessToken = response.data.accessToken;
                localStorage.setItem('accessToken', accessToken);
                props.setAccessToken?.(accessToken)
            }).then(() => {
                navigate("/dashboard")
            })

        } catch (error) {
            console.error("Login failed:", error);
            setLoginErr(true);
        }
    };



    return (
        <div className="bg-main h-screen flex items-center justify-center">
            <div className="p-5 bg-white rounded-lg container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="w-1/2 mx-auto mb-4 max-w-xs" src="/UMS-logo.png" alt="Your Company" />
                    <h2 className="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-main">Sign in to your account</h2>
                </div>

                <div className="p-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    {loginErr && (<div className="bg-red-100 border border-red-400 text-red-700 my-2 px-4 py-3 rounded" role="alert">
                        <strong className="font-bold">Holy smokes!</strong>
                        <span className="block sm:inline"> Please Check and enter valid Credentials !</span>

                    </div>)}
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username" className="block text-sm text-main font-bold leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <input id="username" name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm text-main font-bold leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:border-2 hover:border-blue-300 hover:bg-white hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500 text-main font-bold">
                        Don't have an account?
                        <Link to={REGISTER} className="font-semibold leading-6 text-indigo-600 hover:text-main text-second font-bold"> ( Sign up )</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state: RootState) => {
    return {
        username: state.user.username,
        accessToken: state.system.accessToken,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUser: (user: User) => dispatch(setUser(user)),
        setAccessToken: (accessToken: string) => dispatch(setAccessToken(accessToken))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
