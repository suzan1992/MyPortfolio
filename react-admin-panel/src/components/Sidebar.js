import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaCog } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Admin Panel</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
                    <li><Link to="/users"><FaUsers /> Users</Link></li>
                    <li><Link to="/settings"><FaCog /> Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
