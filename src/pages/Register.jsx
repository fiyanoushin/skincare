import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isExist = storedUsers.find((user) => user.email === email);

    if (isExist) {
      setError("❌ Email already registered. Please login.");
    } else {
      const newUser = { name, email, password };
      const updatedUsers = [...storedUsers, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      navigate("/login");
    }
  };

  return (
    <section className="register-page">
      <div className="register-box">
        <h2>Create Your Account ✨</h2>
        <p>Join Dewélla to shop your favorite beauty products</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Choose Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
          {error && <p className="error-msg">{error}</p>}
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
