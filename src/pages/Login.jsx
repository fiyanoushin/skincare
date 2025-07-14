import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      navigate("/");
    } else {
      setError("❌ Invalid email or password. Please try again.");
    }
  };

  return (
    <section className="login-page">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          {error && <p className="error-msg">{error}</p>}
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
