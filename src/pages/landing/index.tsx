import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-main h-screen flex items-center justify-center text-white">
            <div className="text-center">
                <img src={"UMS-logo.png"} alt="Logo" className="w-1/2 mx-auto mb-4 max-w-xs" />
                <h1 className="text-5xl font-extrabold mb-6 text-white">User Management System</h1>
                <p className="text-lg text-white">
                    This is a demonstration project to build a user management application with Spring Boot, Spring Security, PostgresQL, and vite-react-ts.
                </p>
                <button className="animate-bounce mt-6 py-2 px-4 border hover:text-main hover:bg-white text-white rounded-full text-lg font-semibold focus:outline-none"
                    onClick={() => {
                        navigate("/login")
                    }}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default LandingPage;