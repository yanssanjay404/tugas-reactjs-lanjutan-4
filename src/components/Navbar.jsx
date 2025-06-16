import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">MyApp</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse show" id="navbarNav">
        <ul className="navbar-nav me-auto">
          {user?.role === "admin" && (
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Dashboard</Link>
            </li>
          )}
          {user?.role === "user" && (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profil Saya</Link>
            </li>
          )}
        </ul>

        <ul className="navbar-nav">
          {user ? (
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={logout}>Logout</button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
