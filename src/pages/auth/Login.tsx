import { Link } from "react-router-dom";


function Login() {
    return (
        <div className="bg-main h-screen flex items-center justify-center">
            <div className="p-5 bg-white rounded-lg container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="w-1/2 mx-auto mb-4 max-w-xs" src="/UMS-logo.png" alt="Your Company" />
                    <h2 className="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-main">Sign in to your account</h2>
                </div>

                <div className="p-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
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
                        <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-main text-second font-bold"> Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;