import { connect } from "react-redux";
import { hideSidebar, showSidebar } from "../../../store/actions/system";
import { bindActionCreators } from "redux";

function Header({ sidebarstate, showSidebar, hideSidebar }) {

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
                            aria-expanded={sidebarstate}
                            onClick={(e) => {
                                if (sidebarstate) {
                                    console.log("hide !!!");
                                    hideSidebar();

                                } else {
                                    console.log("show !!!");
                                    showSidebar();
                                }
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

                    {/* right side */}
                    <div>

                    </div>
                </div>
            </div>
        </header>
    );
}


const mapStateToProps = state => {
    return {
        sidebarstate: state.system.sidebar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showSidebar: () => dispatch(showSidebar()),
        hideSidebar: () => dispatch(hideSidebar()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
