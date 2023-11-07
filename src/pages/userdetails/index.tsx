import { useEffect, useState } from "react";
import Select from 'react-select';
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios-instance";
import { AxiosResponse } from "axios";
import User from "../../interfaces/userInterface";
import { MdSecurity } from "react-icons/md";


function UserDetails() {

    const [user, setUser] = useState<null | Partial<User>>(null);
    const [selectedRoles, setSelectedRoles] = useState([]);


    const { userid } = useParams();

    const options: { value: string; label: string; }[] = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'manager', label: 'Manager' },
        // Add more roles as needed
    ];


    useEffect(() => {
        axiosInstance.get("api/v1/users/{id}".replace("{id}", userid)).then((response: AxiosResponse) => {
            setUser(response.data)
        })
    }, [userid])


    return (
        <div className="flex justify-center">
            <div className="p-4 m-2 rounded-lg border-2 bg-blue-50">
                <h1 className="text-3xl font-bold text-main">User Details : <span className="text-black">{user?.username}</span> </h1>
                <form className="p-4" >
                    <label className="block">
                        <span className="font-medium text-slate-700 pb-2">
                            Username
                        </span>
                        <input
                            type="username"
                            name="username"
                            id="username"
                            defaultValue={user?.username}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>
                    <label className="block">
                        <span className="font-medium text-slate-700 pb-2">
                            First Name
                        </span>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            defaultValue={user?.firstname}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>

                    <label className="block">
                        <span className="font-medium text-slate-700 pb-2">
                            Last Name
                        </span>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            defaultValue={user?.lastname}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>

                    <label className="block">
                        <span className="font-medium text-slate-700 pb-2">
                            Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue={user?.email}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>

                    <label className="block">
                        <span className="font-medium text-slate-700 pb-2">
                            Date of Birth
                        </span>
                        <input
                            type="text"
                            name="dateofbirth"
                            id="dateofbirth"
                            defaultValue={user?.datenaissance?.toString()}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>

                    <label className="block">
                        <span className="font-medium text-slate-700 pb-2">
                            Nationality
                        </span>
                        <input
                            type="text"
                            name="nationality"
                            id="nationality"
                            defaultValue={user?.nationality}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>

                    <label className="block">
                        <span className="font-medium text-slate-700 pb-2">
                            Address
                        </span>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            defaultValue={user?.adress}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>
                    <div className="flex justify-end m-3">
                        <button type="reset" className="rounded-md font-bold hover:bg-blue-500 hover:text-white p-2 flex items-center border-2 border-blue-500 bg-blue-50">Submit</button>
                    </div>
                </form>

                <p>
                    <strong>Created On:</strong> {user?.createdOn?.toString()}
                </p>
                <p>
                    <strong>Last Updated On:</strong> {user?.lastUpdatedOn?.toString()}
                </p>
            </div>
            <div className="bg-white p-8 m-2 rounded-xl shadow shadow-slate-300">
                <h1 className="text-2xl font-bold flex items-center"><MdSecurity />Change Password</h1>
                <p className="text-slate-500">Fill up the form to change the password</p>

                <form action="" className="mt-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">New Password</p>
                            <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="New Password" />
                        </label>

                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>

                            <span>Change password</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/2 mx-auto mt-6">
                <h1 className="text-2xl font-semibold mb-4">Role Management</h1>
                <Select
                    options={options}
                    isMulti={true}
                />
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Selected Roles</h2>
                    <ul>
                        {selectedRoles.map((role: { value: string; label: string; }) => (
                            <li key={role.value} className="flex items-center mb-2">
                                <span className="mr-2">{role.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default UserDetails;