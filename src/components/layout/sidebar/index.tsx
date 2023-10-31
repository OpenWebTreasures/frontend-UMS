import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

function SideBar({ sidebarstate }) {

    const sidebar = useRef(null);


    useEffect(() => {
        console.log(sidebarstate)
    }, [sidebarstate])


    return (
        <React.Fragment>
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarstate ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarstate ? 'translate-x-0' : '-translate-x-64'}`}
            >

            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        sidebarstate: state.system.sidebar
    };
};


export default connect(mapStateToProps)(SideBar);
