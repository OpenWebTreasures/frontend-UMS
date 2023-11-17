import { connect } from "react-redux";
import { hideSidebar, showSidebar } from "../../../store/actions/system";
import { Dispatch } from "redux";
import { RootState } from "../../../store/reducers";
import { PROFILE } from "../../../routes";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../../store/actions/user";



interface HeaderProps {
    sidebarOpen: boolean;
    firstname: string;
    lastname: string;
    showSidebar: () => void;
    hideSidebar: () => void;
    removeUser: () => void;
}



function Header({ sidebarOpen, showSidebar, hideSidebar, removeUser, firstname, lastname }: HeaderProps) {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        removeUser();
        navigate("/");
    };
    console.log(firstname)
    console.log(lastname)


    return (
        <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 -mb-px">

                    {/* left side */}
                    <div className="flex">
                        {/* Hamburger button */}
                        <button
                            className="text-slate-500 hover:text-slate-600 lg:hidden"
                            aria-controls="sidebar"
                            aria-expanded={sidebarOpen}
                            onClick={() => {
                                sidebarOpen ? hideSidebar() : showSidebar();
                            }}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="5" width="16" height="2" />
                                <rect x="4" y="11" width="16" height="2" />
                                <rect x="4" y="17" width="16" height="2" />
                            </svg>
                        </button>
                    </div>


                    <div className="flex items-center justify-between min-w-[250px] border-2 p-1 rounded-full px-3">
                        <span className="font-bold text-main"> {firstname} {lastname} </span>
                        <Link to={PROFILE} className="border-2 border-main bg-white hover:scale-110 p-2 rounded-full">
                            <svg width="25px" height="25px" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <g transform="translate(-140 -2159)" fill="#000">
                                        <g transform="translate(56 160)">
                                            <path d="m100.56 2017h-13.124c-0.70639 0-1.228-0.697-0.96159-1.338 1.2362-2.964 4.1403-4.662 7.5233-4.662 3.3839 0 6.2881 1.698 7.5243 4.662 0.26643 0.641-0.2552 1.338-0.96159 1.338m-10.646-12c0-2.206 1.8323-4 4.0832-4 2.2519 0 4.0832 1.794 4.0832 4s-1.8313 4-4.0832 4c-2.2509 0-4.0832-1.794-4.0832-4m14.039 11.636c-0.74212-3.359-3.0634-5.838-6.1187-6.963 1.619-1.277 2.5632-3.342 2.2161-5.603-0.40219-2.623-2.6296-4.722-5.3183-5.028-3.7116-0.423-6.8598 2.407-6.8598 5.958 0 1.89 0.89422 3.574 2.2886 4.673-3.0563 1.125-5.3765 3.604-6.1197 6.963-0.26949 1.221 0.73497 2.364 2.0099 2.364h15.892c1.276 0 2.2805-1.143 2.0099-2.364"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </Link>
                        <button onClick={handleLogout} className="border-2 border-red-500 bg-white hover:scale-110 p-2 rounded-full">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2929 14.2929C16.9024 14.6834 16.9024 15.3166 17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071L21.6201 12.7941C21.6351 12.7791 21.6497 12.7637 21.6637 12.748C21.87 12.5648 22 12.2976 22 12C22 11.7024 21.87 11.4352 21.6637 11.252C21.6497 11.2363 21.6351 11.2209 21.6201 11.2059L18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289C16.9024 8.68342 16.9024 9.31658 17.2929 9.70711L18.5858 11H13C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H18.5858L17.2929 14.2929Z" fill="#323232" />
                                <path d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H14.5C15.8807 22 17 20.8807 17 19.5V16.7326C16.8519 16.647 16.7125 16.5409 16.5858 16.4142C15.9314 15.7598 15.8253 14.7649 16.2674 14H13C11.8954 14 11 13.1046 11 12C11 10.8954 11.8954 10 13 10H16.2674C15.8253 9.23514 15.9314 8.24015 16.5858 7.58579C16.7125 7.4591 16.8519 7.35296 17 7.26738V4.5C17 3.11929 15.8807 2 14.5 2H5Z" fill="#323232" />
                            </svg>
                        </button>
                    </div>


                </div>
            </div>
        </header>
    );
}


const mapStateToProps = (state: RootState) => {
    return {
        sidebarOpen: state.system.sidebarOpen,
        username: state.user.username,
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        accessToken: state.user.accessToken,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        showSidebar: () => dispatch(showSidebar()),
        hideSidebar: () => dispatch(hideSidebar()),
        removeUser: () => dispatch(removeUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
