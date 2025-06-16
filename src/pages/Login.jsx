import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [role, setRole] = useState("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = {
      name: "Sakura",
      role: role
    };
    login(userData);
    navigate(role === "admin" ? "/admin" : "/profile");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="form-group">
        <label>Pilih Role</label>
        <select className="form-control" onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login sebagai {role}
      </button>
    </div>
  );
}

export default Login;
