import { useEffect, useState } from "react";
import Role from "../interfaces/roleInterface";
import axiosInstance from "../axios-instance";
import { ASSIGN_FEATURE, GET_ALL_FEATURES, GET_ROLE_BY_NAME, REVOKE_FEATURE } from "../Apis";
import { AiOutlineCaretRight } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Button from "../components/button";

function RoleDetails() {

    const [allFeatures, setAllFeatures] = useState<string[]>([]);
    const [role, setRole] = useState<null | Role>(null)

    const { roleid } = useParams<string>();

    useEffect(() => {
        axiosInstance.get(GET_ALL_FEATURES)
            .then(async (response) => {
                setAllFeatures(response.data);
                axiosInstance.get(GET_ROLE_BY_NAME.replace("{name}", roleid || ""))
                    .then(async (response) => {
                        setRole(response.data);
                    })
            })
    }, [roleid])

    const handleClick = async (feature: string) => {
        if (role?.features.includes(feature)) {
            console.log("okokokok")
            await axiosInstance.post(REVOKE_FEATURE, { featureName: feature, roleName: roleid }).then((response => {
                if (response.status === 200)
                    setRole((prev: Role | null) => {
                        if (prev === null) { return prev; } return { ...prev, features: prev.features.filter(el => el !== feature) };
                    });
            })).catch(error => {
                console.error("Error during post request:", error);
            });
        } else {
            await axiosInstance.post(ASSIGN_FEATURE, { featureName: feature, roleName: roleid }).then(response => {
                if (response.status === 200)
                    setRole((prev: Role | null) => {
                        if (prev === null) { return prev; } return { ...prev, features: [...prev.features, feature] };
                    });
            }).catch(error => {
                console.error("Error during post request:", error);
            });
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-between items-center my-3">
                <h1 className="text-2xl font-bold mb-4 text-main flex items-center"><AiOutlineCaretRight /><u> {roleid} </u></h1>
            </div>



            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Feature Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                State
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allFeatures?.map((feature, index) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {feature.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {feature.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {role?.features.includes(feature?.name) ? "Active" : "denided"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button additionalClass={" w-1/2"} type={role?.features.includes(feature?.name) ? "cancel" : "submit"} onClick={() => { handleClick(feature.name) }} >
                                            {role?.features.includes(feature?.name) ? "Revoke" : "Grant"}
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RoleDetails;