import { useEffect, useState } from "react";
import Role from "../interfaces/roleInterface";
import axiosInstance from "../axios-instance";
import { ASSIGN_FEATURE, GET_ALL_FEATURES, GET_ROLE_BY_NAME, REVOKE_FEATURE } from "../Apis";
import { AiOutlineCaretRight } from "react-icons/ai";
import { useParams } from "react-router-dom";

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

            <div className="container p-1 m-1 bg-last rounded-lg flex flex-wrap">

                {
                    allFeatures?.map((el: string, index: number) => (
                        <button onClick={() => { handleClick(el) }} key={index} className={"p-4 m-2 max-w-lg min-w-xs text-sm rounded-lg border-2 hover:scale-110 " + (role?.features.includes(el) ? "text-green-800 bg-green-50" : "text-red-800 bg-red-50")} role="alert">
                            <span className="font-medium text-black">{el}</span>
                        </button>
                    ))
                }
            </div>




        </div>
    )
}

export default RoleDetails;