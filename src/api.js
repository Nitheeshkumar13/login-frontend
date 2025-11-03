const API_URL = "https://login-page-54dl.onrender.com"; // your backend URL

// --- LOGIN FUNCTION ---
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return data; // { success: true, role: "admin" } or error
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Server error" };
  }
};

// --- REGISTER FUNCTION ---
export const registerUser = async (username, password, role) => {
  try {
    const response = await fetch(`${API_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });

    const data = await response.json();
    return data; // { success: true, message: "User registered successfully" }
  } catch (error) {
    console.error("Register error:", error);
    return { success: false, message: "Server error" };
  }
};

