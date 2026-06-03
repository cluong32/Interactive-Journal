import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api";

function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", email: "", password: ""});

    async function handleSubmit(e) {
        e.preventDefault();

        await apiRequest("./api/signup", {
            method: 'POST',
            body: JSON.stringify(form)
        });

        navigate('/login');
    }

    return (
        <div classname="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                {error && <p className="error">{error}</p>}

                <input
                    placeholder="Username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />

                <input
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button>Create Account</button>

                <p>
                    Have an Account? <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;