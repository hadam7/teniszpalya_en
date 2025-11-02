import { useState, useEffect } from "react";
import AccountDropdown from "./AccountDropdown";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [checkedCookie, setCheckedCookie] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch("http://localhost:5044/api/Users/me", {
                    credentials: "include"
                });
                if (response.ok) {
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false);
                }
            } catch (error) {
                console.error("Hiba a bejelentkezés ellenőrzésekor:", error);
                setLoggedIn(false);
            } finally {
                setCheckedCookie(true);
            }
        };

        checkLoginStatus();
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    if (!checkedCookie) return null;

    const handleSectionClick = (section) => {
        // If user clicked 'Courts', navigate to the dedicated courts page instead of trying to scroll home
        if (section === 'Courts') {
            navigate('/courts');
            return;
        }
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            navigate(`/`);
            setTimeout(() => {
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 500);
        }
    };

    return (
        <nav className={`h-[118px] flex justify-end items-center border-dark-green-octa border-b-[1px] z-10 relative text-[18px] transition-all duration-200 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-row gap-8 h-[54px] mr-[42px] items-center justify-end">
                <div className="flex flex-row gap-12 text-dark-green">
                    <div className={`cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full duration-1000 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} onClick={() => handleSectionClick('Navbar')}>Home</div>
                    <div className={`cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full duration-1000 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} onClick={() => handleSectionClick('Courts')}>Courts</div>
                    <div className={`cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full duration-1000 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} onClick={() => handleSectionClick('PriceList')}>Price List</div>
                    <div className={`cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full duration-1000 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} onClick={() => handleSectionClick('Contact')}>Contact</div>
                </div>
                <div className={`px-[32px] py-[12px] text-[16px] bg-green text-white font-semibold rounded-[30px] cursor-pointer hover:bg-dark-green hover:shadow-lg transition-all duration-500 active:scale-95 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>Reserve</div>
                {loggedIn ? (
                    <div className="relative">
                        <img 
                            src="src/assets/profile_pic.svg" 
                            alt="" 
                            className={`h-12 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-700 hover:drop-shadow-lg ease-in-out${isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-360'}`}
                            onClick={() => setAccountDropdown(!accountDropdown)}
                        />
                        <AccountDropdown hidden={!accountDropdown}/>
                    </div>
                ) : (
                    <a href="/login">
                        <div className={`px-[32px] py-[12px] text-[16px] bg-white border-dark-green text-dark-green border-[1px] rounded-[30px] cursor-pointer hover:bg-dark-green hover:text-white transition-all duration-500 active:scale-95 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            Login
                        </div>
                    </a>
                )}
            </div>
        </nav>
    );
}
export default Navbar;