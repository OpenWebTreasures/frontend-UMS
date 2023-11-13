import { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Role from "../interfaces/roleInterface";
import { AiFillPlusCircle, AiOutlineCaretRight } from "react-icons/ai";
import { ROLE_DETAILS } from "../routes";


function RolesPage() {
    const [roles, setRoles] = useState([]);

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        axiosInstance.get("api/v1/roles").then((resposne: AxiosResponse) => {
            setRoles(resposne.data)
        }).catch((error: AxiosError) => {
            console.log(error)
        })
    }, [])

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-between items-center my-3">
                <h1 className="text-2xl font-bold mb-4 text-main flex items-center"><AiOutlineCaretRight /> List of Roles</h1>
                <button className="bg-main hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full flex items-center justify-center"><AiFillPlusCircle /> <span className="m-1">Create</span></button>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-100 ">
                    <tr className="">
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">Created On</th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">Last Updated On</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role: Role, index: number) => (
                        <tr className="dark:bg-gray-800 dark:border-gray-700 hover:bg-last" key={role.id} onClick={() => { navigate(ROLE_DETAILS.replace(":roleid", role.name)) }} style={{ cursor: "pointer" }}>
                            <td className="px-6 py-4"># {index+1}{role.id}</td>
                            <td className="px-6 py-4 font-medium text-main whitespace-nowrap">{role.name}</td>
                            <td className="px-6 py-4 hidden md:table-cell">{role.createdOn.toString()}</td>
                            <td className="px-6 py-4 hidden md:table-cell">{role.lastUpdatedOn.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RolesPage;