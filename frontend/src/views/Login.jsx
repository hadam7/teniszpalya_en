import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate("/register");
    }

    const handleLogin = (e) => {
        e.preventDefault();

        fetch('http://localhost:5044/api/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        })
        .then(response => {
            if (response.ok) {
                navigate("/");
            } else {
                alert('Invalid email or password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };


    return (
        <div>
            <div>Log in</div>
            <form className="flex flex-col w-3xs" onSubmit={handleLogin}>
                <input className="mb-4 border" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input className="mb-4 border" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <input className="mb-4 border bg-light-green" type="submit" value="Log in" />
            </form>
            <div className="bg-light-green w-3xs border" onClick={() => navigateToRegister()}>Register</div>
        </div>
    )
}

export default Login;