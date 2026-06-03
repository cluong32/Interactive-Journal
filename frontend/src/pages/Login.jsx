import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api";

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", password: ""});
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await apiRequest("./api/login", {
                method: 'POST',
                body: JSON.stringify(form)
            });

            navigate('/home');
        } catch {
            setError("Invalid username or password");
        }
    }

    return (
        <div classname="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>Login</h1>

                {error && <p className="error">{error}</p>}

                <input
                    placeholder="Username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button>Login</button>

                <p>
                    No Account? <Link to='/signup'>Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;