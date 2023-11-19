import { useEffect, useState } from "react";
import Card from "./card";
import axiosInstance from "../../axios-instance";
import { COUNT_USERS } from "../../Apis";
import { useToast } from "../../hooks/toast/ToastProvider";

function DashboardMainOutlet() {
    const toast = useToast();
    const [usersCount, setUsersCount] = useState<number>(0);
    useEffect(() => {
        console.log("child :p ")
        axiosInstance.get(COUNT_USERS)
            .then((response) => {
                if (response.status == 200) {
                    setUsersCount(response.data)
                }
            })
            .catch(() => { toast?.pushError("Cannot get users count", 3000) })
    }, [])

    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 rounded-lg border-2 border-last w-full">
                <Card amount={usersCount} description="Number of Users Persisted" title="Users" />
            </div>
        </div>
    )
}

export default DashboardMainOutlet;