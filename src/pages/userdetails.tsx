import { useEffect, useState } from "react";
import Select, { MultiValue } from 'react-select';
import { useParams } from "react-router-dom";
import axiosInstance from "../axios-instance";
import User from "../interfaces/userInterface";
import { MdSecurity } from "react-icons/md"; GiPoliceBadge
import { GiPoliceBadge } from "react-icons/gi";
import { CHANGE_ANY_USER_PASSWORD, CHANGE_USER_ROLES, GET_ALL_ROLES, GET_USER_BY_ID, UPDATE_ANY_USER_DETAILS } from "../Apis";
import { AxiosResponse } from "axios";
import Role from "../interfaces/roleInterface";
import Button from "../components/button";
import { useToast } from "../hooks/toast/ToastProvider";

function UserDetails() {
    const toast = useToast();

    const [user, setUser] = useState<null | Partial<User>>(null);
    const [roles, setRoles] = useState<[] | { value: string; label: string; }[]>([]);
    const [selectedRoles, setSelectedRoles] = useState<MultiValue<{ value: string; label: string; }>>([]);

    const { userid } = useParams();

    useEffect(() => {
        // Fetch roles and set them in the state
        axiosInstance.get(GET_ALL_ROLES)
            .then(async (response) => {
                const roles = response.data.map((el: Role) => ({ value: el.name, label: el.name }));
                setRoles(roles);
                userid && await axiosInstance.get(GET_USER_BY_ID.replace("{id}", userid))
                    .then((userResponse) => {
                        const user: User = userResponse.data;
                        setUser(user);

                        const selectedRoles = roles.filter((option: { value: string; label: string; }) =>
                            user.roleNames?.some((role) => role === option.value)
                        );
                        setSelectedRoles(selectedRoles);
                    })
                    .catch((error) => {
                        console.error("Error fetching user data:", error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching roles:", error);
            });
    }, [userid]);

    const handleChangePassword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const passwordInput = event.currentTarget.password.value;
        axiosInstance.post(CHANGE_ANY_USER_PASSWORD, { username: user?.username, password: passwordInput }).then((response: AxiosResponse) => {
            response.status === 200 ? toast?.pushSuccess("Password changed Successfully", 3000) : toast?.pushError("Something Went Wrong on Password Change!", 3000);
        })
    }

    const handleChangeRoles = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axiosInstance.post(CHANGE_USER_ROLES, { username: user?.username, roleNames: selectedRoles.map(el => (el.value)) }).then((response: AxiosResponse) => {
            response.status === 200 ? toast?.pushSuccess("Roles Assigned Successfully", 3000) : toast?.pushError("Something Went Wrong on Role Config!", 3000);

        })
    }

    const handleChangeDetails = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        user?.username && axiosInstance.put(UPDATE_ANY_USER_DETAILS.replace('{username}', user?.username), {
            firstname: event.currentTarget.firstname.value,
            lastname: event.currentTarget.lastname.value,
            email: event.currentTarget.email.value,
            datenaissance: event.currentTarget.datenaissance.value,
            nationality: event.currentTarget.nationality.value,
            adress: event.currentTarget.adress.value,
            username: event.currentTarget.username.value,
        }).then((response: AxiosResponse) => {
            response.status === 200 ? toast?.pushSuccess("User Details Updated Successfully", 3000) : toast?.pushError("Something Went Wrong on User Update!", 3000);

        }).catch(() => {
            toast?.pushError("Something Went Wrong on User Update!", 3000);
        })
    }


    return (
        <div className="flex flex-wrap justify-center ">
            <div className="p-4 m-2 rounded-lg border-2 bg-blue-50 lg:w-1/2 md:w-full sm:w-full max-w-[550px]">
                <h1 className="text-3xl font-bold">User Details : <span className="text-black"></span></h1>
                <form onSubmit={handleChangeDetails} className="p-4">
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
                            type="date"
                            name="datenaissance"
                            id="datenaissance"
                            defaultValue={user?.datenaissance ? new Date(user?.datenaissance).toISOString().substring(0, 10) : ""}
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
                            name="adress"
                            id="adress"
                            defaultValue={user?.adress}
                            className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>
                    <div className="flex justify-end m-3">
                        <Button type="submit" >Submit</Button>
                    </div>
                </form>

                <p>
                    <strong>Created On:</strong> {user?.createdOn?.toString()}
                </p>
                <p>
                    <strong>Last Updated On:</strong> {user?.lastUpdatedOn?.toString()}
                </p>
            </div>
            <div className="flex-1 max-w-[700px]">
                <form onSubmit={handleChangeRoles} className="bg-white p-8 m-2 rounded-xl shadow shadow-slate-300 min-w-[330px]">
                    <h1 className="text-2xl font-semibold mb-4 flex items-center"><GiPoliceBadge /> Role Management</h1>
                    <Select
                        value={selectedRoles}
                        onChange={(e) => { setSelectedRoles(e) }}
                        className="w-full"
                        options={roles}
                        isMulti={true}
                    />
                    <div className="mt-4 flex justify-end">
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
                <div className="bg-white p-8 m-2 rounded-xl shadow shadow-slate-300 min-w-[330px]">
                    <h1 className="text-2xl font-bold flex items-center"><MdSecurity />Change Password</h1>
                    <p className="text-slate-500">Fill up the form to change the password</p>
                    <form onSubmit={handleChangePassword} className="mt-2">
                        <div className="flex flex-col space-y-5">
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">New Password</p>
                                <input id="password" name="password" type="password" autoComplete="true" required className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="New Password" />
                            </label>

                            <Button type="submit" additionalClass={"flex justify-center items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                                <span>Change password</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default UserDetails;