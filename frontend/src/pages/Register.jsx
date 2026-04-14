import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      return alert("All fields are required");
    }

    try {
      await API.post("/auth/register", { name, email, password });
      alert("Registered successfully 🎉");
      nav("/");
    } catch (err) {
      alert(err.response?.data?.error || "Register failed");
    }
  };

  return (
    <div className="container">
      <h2>Create Account 🚀</h2>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Sign Up</button>

      <div className="link">
        Already have an account?{" "}
        <span onClick={() => nav("/")}>Login</span>
      </div>
    </div>
  );
}