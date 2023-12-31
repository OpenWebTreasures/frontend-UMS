// import { useEffect } from "react";
// import Header from "./header";
// import SideBar from "./sidebar";
// import { RootState } from "../../store/reducers";
// import { Dispatch } from "redux";
// import { removeUser, setUser } from "../../store/actions/user";
// import User from "../../interfaces/userInterface";
// import { connect } from "react-redux";
// import axiosInstance from "../../axios-instance";
// import { AxiosError, AxiosResponse } from "axios";
// import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
// import { LOGIN, ME } from "../../routes";

// interface Props {
//     setUser: (user: Partial<User>) => void;
//     removeUser: () => void;
// }


// function DashboardLayout({ setUser }: Props) {

//     const navigate: NavigateFunction = useNavigate();

//     useEffect(() => {

//         axiosInstance.get(ME).then((response: AxiosResponse) => {
//             setUser({
//                 ...response.data
//             })
//         }).catch((error: AxiosError) => {
//             console.log("failed to auth", error)
//             navigate(LOGIN)
//         })
//     }, [])

//     return (
//         <div className="flex h-screen overflow-hidden">
//             <SideBar />
//             <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
//                 <Header />
//                 <main>
//                     <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
//                         <Outlet />
//                     </div>
//                 </main>
//             </div>
//         </div>
//     )
// }


// const mapStateToProps = (state: RootState) => {
//     return {
//         username: state.user.username,
//         roles: state.user.roles,
//         firstname: state.user.firstname,
//         lastname: state.user.lastname,
//         accessToken: state.user.accessToken,
//     };
// };

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         setUser: (user: User) => dispatch(setUser(user)),
//         removeUser: () => dispatch(removeUser()),
//     };
// }


// export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);


import ToastProvider from "../../hooks/toast/ToastProvider";
import Header from "./header";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <ToastProvider variant={"top_middle"}>

            <div className="flex h-screen overflow-hidden">
                <SideBar />
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <main>
                        <div className="container mt-5 max-w-9xl mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </ToastProvider>
    )
}

export default DashboardLayout;