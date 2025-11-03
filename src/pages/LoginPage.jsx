import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api"; // Import backend API call

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Login Function
  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await loginUser(username, password);

    if (result.success) {
      // Redirect to dashboard with role
      navigate("/dashboard", { state: { role: result.role } });
    } else {
      alert(result.message || "Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "10px" }}>
        Don’t have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Create one
        </span>
      </p>
    </div>
  );
}

