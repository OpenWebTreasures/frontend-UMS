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
                        <Link to={PROFILE} className="border-2 border-main bg-white hover:scale-110 p-2 rounded-full"><img className="max-w-[25px]" src="./profile.svg" alt="" /></Link>
                        <button onClick={handleLogout} className="border-2 border-red-500 bg-white hover:scale-110 p-2 rounded-full"><img className="max-w-[25px]" src="./logout.svg" alt="" /></button>
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
