import { useLocation, useNavigate } from "react-router-dom";
import SuperAdminDashboard from "./Superadmin";
import AdminDashboard from "./Admin";
import UserDashboard from "./user";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state?.role || "guest";

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      {role === "superadmin" && <SuperAdminDashboard />}
      {role === "admin" && <AdminDashboard />}
      {role === "user" && <UserDashboard />}
      {role === "guest" && (
        <div className="dashboard-container">
          <h2>Access Denied</h2>
          <p>Please log in first.</p>
          <button onClick={handleLogout}>Go to Login</button>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}


