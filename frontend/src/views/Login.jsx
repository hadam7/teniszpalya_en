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
            {/* Háttér glow (ugyanaz, mint a Register nézetben) */}
            <div className="w-[50vw] h-[50vw] bg-green rounded-full fixed blur-[200px] pointer-events-none z-0 opacity-20 animate-pulse"/>

            {/* Kétoszlopos layout (Register mintájára) */}
            <div className="flex flex-col lg:flex-row min-h-screen gap-10 lg:gap-28 mx-4 sm:mx-8 lg:mx-20">
                <div className="hidden lg:flex flex-1 my-15 z-10 items-center">
                    <a href="/" className="w-full h-full">
                        <div className="auth-hero-card w-[560px] max-w-full min-h-[520px] bg-[url(/src/assets/tennis_court.jpg)] bg-cover bg-center hover:scale-105 shadow-2xl transition-all duration-500 cursor-pointer rounded-[30px] z-10" />
                    </a>
                </div>

                <div className="flex-1 flex flex-col justify-center py-10 lg:py-0">
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-4 sm:gap-[16px] items-center justify-center">
                                <div className="text-2xl text-[36px] font-semibold text-dark-green min-h-[50px]">
                                    Log in
                                </div>
                                <div className="text-center max-w-[360px] text-dark-green-half min-h-[48px] leading-relaxed text-sm sm:text-base">
                                    Sign in to your account to continue your booking.
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 sm:gap-[24px] z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <div className="flex flex-col">
                                    <div className="mb-2 text-dark-green font-medium text-sm sm:text-base">Email</div>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-white rounded-[16px] w-full h-[50px] sm:h-[62px] px-4 text-sm sm:text-base border border-dark-green-half focus:outline-none focus:border-dark-green focus:ring-2 focus:ring-green/20 transition-all duration-300"/>
                                </div>

                                <div className="flex flex-col">
                                    <div className="mb-2 text-dark-green font-medium text-sm sm:text-base">Password</div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-white rounded-[16px] w-full h-[50px] sm:h-[62px] px-4 text-sm sm:text-base border border-dark-green-half focus:outline-none focus:border-dark-green focus:ring-2 focus:ring-green/20 transition-all duration-300"/>
                                </div>

                                <input
                                    type="submit"
                                    className="bg-green text-white font-semibold rounded-[30px] h-[50px] sm:h-[62px] text-sm sm:text-base hover:bg-dark-green hover:shadow-lg active:scale-95 cursor-pointer transition-all duration-300"
                                    value="Log in"
                                />

                                <div className="flex justify-center text-sm sm:text-base animate-in fade-in duration-700 delay-200">
                                    Don't have an account?&nbsp;
                                    <a onClick={navigateToRegister} className="text-[#2388FF] hover:underline hover:text-[#1565c0] transition-colors duration-300 cursor-pointer">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;