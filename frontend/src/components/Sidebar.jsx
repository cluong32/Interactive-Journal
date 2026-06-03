import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api";

function Sidebar() {
    const navigate = useNavigate();

    async function logout() {
        await apiRequest("/auth/logout/", { method: "POST" });
        navigate('/login');
    }

    return (
        <aside className="sidebar">
            <h2>Journal</h2>

            <Link to="/home">Home</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/profile">Profile</Link>

            <button onClick={logout}>Logout</button>
        </aside>
    );
}

export default Sidebar;