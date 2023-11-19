
import { useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import axiosInstance from "../axios-instance";
import { AxiosResponse } from "axios";
import User from "../interfaces/userInterface";
import { useNavigate } from "react-router-dom";
import { USER_DETAILS } from "../routes";

function UsersPage() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosInstance.get('api/v1/users').then((response: AxiosResponse) => {
            setUsers(response.data)
        })
    }, [])


    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-between items-center my-3">
                <h1 className="text-2xl font-bold mb-4 text-main flex items-center"><AiOutlineCaretRight /> List of Users</h1>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-100 ">
                    <tr className="">
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">FULL NAME</th>
                        <th scope="col" className="px-6 py-3">ROLES</th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">Created On</th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">Last Updated On</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => (
                        <tr className="dark:bg-gray-800 dark:border-gray-700 hover:bg-last" key={user.id} onClick={() => { navigate(USER_DETAILS.replace(':userid', user.id.toString())) }} style={{ cursor: "pointer" }}>
                            <td className="px-6 py-4">#{user.id}</td>
                            <td className="px-6 py-4 font-medium text-main whitespace-nowrap">{user.firstname + " " + user.lastname}</td>
                            <td className="px-6 py-4">{user.roleNames.map((el, index) => (<span key={index}>* {el}</span>))}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.createdOn.toString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.lastUpdatedOn.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage;