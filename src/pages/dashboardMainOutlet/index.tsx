import Card from "./card";

function DashboardMainOutlet() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 rounded-lg border-2 border-last w-full">
                <Card amount="1" description="Number of Users Persisted" title="Users" />
                <Card amount="1" description="Number of Users Persisted" title="Users" />
                <Card amount="1" description="Number of Users Persisted" title="Users" />
                <Card amount="1" description="Number of Users Persisted" title="Users" />
            </div>
        </div>
    )
}

export default DashboardMainOutlet;