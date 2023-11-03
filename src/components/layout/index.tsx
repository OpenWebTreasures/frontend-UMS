import Header from "./header";
import SideBar from "./sidebar";


function DashboardLayout() {
    return (
        <div className="flex h-screen overflow-hidden">

            <SideBar />

            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                <Header />

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* childs */}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;