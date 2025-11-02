import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const [updatedFirstName, setUpdatedFirstName] = useState("");
    const [updatedLastName, setUpdatedLastName] = useState("");
    const [updatedEmail, setUpdatedEmail] = useState("");
    const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("");

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const [currentPasswordError, setCurrentPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");

    const [isLoaded, setIsLoaded] = useState(false);
    
    const [validRequest, setValidRequest] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5044/api/Users/me", {
            credentials: "include"
        })
        .then(response =>  {
            if (response.ok) {
                return response.json();
            }
            else {
                navigate("/");
            }
        })
        .then(data => {
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
            setTimeout(() => setIsLoaded(true), 100);
        });
    },[]);

    const validateDetails = (firstName, lastName, phoneNumber, email) => {
        let valid = true;

        const namePattern = /^[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű]+$/;
        const phonePattern = /^\+?[0-9]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!namePattern.test(firstName)) {
            setFirstNameError(true);
            setUpdatedFirstName("");
            valid = false;
        } else setFirstNameError("");

        if (!namePattern.test(lastName)) {
            setLastNameError(true);
            setUpdatedLastName("");
            valid = false;
        } else setLastNameError("");

        if (!phonePattern.test(phoneNumber)) {
            setPhoneNumberError(true);
            setUpdatedPhoneNumber("");
            valid = false;
        } else setPhoneNumberError("");

        if (!emailPattern.test(email)) {
            setEmailError(true);
            setUpdatedEmail("");
            valid = false;
        } else setEmailError("");

        return valid;
    };

    const validatePassword = (password) => {
        let valid = true;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordPattern.test(password)) {
            setNewPasswordError("Invalid new password");
            setNewPassword("");
            valid = false;
        } else setNewPasswordError("");

        return valid;
    }

    const handleChangeDetails = (e) => {
        e.preventDefault();
        
        if (!validateDetails(updatedFirstName || firstName, updatedLastName || lastName, updatedPhoneNumber || phoneNumber, updatedEmail || email)) return;

        const updatedDetails = {
            firstName: updatedFirstName || firstName,
            lastName: updatedLastName || lastName,
            email: updatedEmail || email,
            phoneNumber: updatedPhoneNumber || phoneNumber,
        };

        if (JSON.stringify(updatedDetails) === JSON.stringify({firstName, lastName, email, phoneNumber})) {
            alert("No changes detected.");
            return;
        } else {
            fetch("http://localhost:5044/api/Users/edit", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedDetails),
                credentials: "include"
            })
            .then(response => {
                if (response.ok) {
                    console.log("Details updated successfully.");
                    setValidRequest(true);
                    setTimeout(() =>
                        navigate(0)
                    , 1000);
                } else {
                    alert("Failed to update details.");
                }
            })
        }
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        
        if (!validatePassword(newPassword)) return;

        if (currentPassword === "" || newPassword === "") {
            alert("No changes detected.");
            return;
        } else {
            fetch("http://localhost:5044/api/ChangePassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    password: currentPassword, 
                    newPassword: newPassword 
                }),
                credentials: "include"
            })
            .then(response => {
                if (response.ok) {
                    console.log("Password changed successfully.");
                    setValidRequest(true);
                    setTimeout(() => 
                        navigate(0)
                    , 1000);
                } else {
                    setCurrentPasswordError("Invalid current password");
                    setCurrentPassword("");
                    setNewPassword("");
                }
            })
        }
    }

    return (
        <div className="min-h-screen overflow-hidden relative">
            <div className={`w-[50vw] h-[50vw] bg-light-green rounded-full absolute blur-[200px] z-0 top-[40vh] left-[-10vw] transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
            <div className={`w-[50vw] h-[50vw] bg-light-green rounded-full absolute blur-[200px] z-0 top-[-50vh] left-[50vw] transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
            
            <Navbar />
            
            <div className="flex justify-center mt-[105px] z-10">
                
                
                <div className={`z-10 w-6xl flex flex-col px-5 transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="mt-[115px] text-2xl font-bold text-center">
                        Welcome, {firstName}
                    </div>
                    
                    <div className={`flex flex-row mt-5 gap-5 transition-all duration-700 delay-100 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="border border-dark-green-octa py-3 px-9 rounded-lg shadow-lg shadow-dark-green-octa cursor-pointer transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                            Profile Settings
                        </div>
                        <div className="border border-dark-green-octa py-3 px-9 rounded-lg shadow-lg shadow-dark-green-octa cursor-pointer transition-all duration-300  hover:-translate-y-1 active:translate-y-0">
                            History
                        </div>
                    </div>
        
                    <div className={`flex flex-row gap-5 mt-5 transition-all duration-700 delay-200 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="flex-4 flex flex-col border-dark-green-octa border shadow-lg shadow-dark-green-octa py-5 px-5 rounded-lg">
                            <div className="font-semibold">Details</div>
                            <form onSubmit = {(e) => handleChangeDetails(e)}>
                                <div className="ml-2 flex flex-row mt-3 gap-5">
                                    <div className="flex-col">
                                        <div>First Name</div>
                                        <input 
                                            type="text" 
                                            value={updatedFirstName}
                                            onChange={(e) => {setUpdatedFirstName(e.target.value)}}
                                            className={`py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80 ${
                                            firstNameError && !updatedFirstName
                                                ? "border border-red-500 focus:ring-red-400 placeholder:text-red-500"
                                                : "focus:ring-dark-green focus:bg-opacity-80"
                                            }`}
                                            placeholder={firstName}
                                            />
                                    </div>
                                    <div className="flex flex-col">
                                        <div>Phone Number</div>
                                        <input 
                                            type="text" 
                                            value={updatedPhoneNumber}
                                            onChange={(e) => {setUpdatedPhoneNumber(e.target.value)}}
                                            className={`py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80 ${
                                            phoneNumberError && !updatedPhoneNumber
                                                ? "border border-red-500 focus:ring-red-400 placeholder:text-red-500"
                                                : "focus:ring-dark-green focus:bg-opacity-80"
                                            }`} 
                                            placeholder={phoneNumber}
                                        />
                                    </div>
                                </div>
                                <div className="ml-2 flex flex-row mt-3 gap-5">
                                    <div className="flex flex-col">
                                        <div>Last Name</div>
                                        <input 
                                            type="text" 
                                            value={updatedLastName}
                                            onChange={(e) => {setUpdatedLastName(e.target.value)}}
                                            className={`py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80 ${
                                            lastNameError && !updatedLastName
                                                ? "border border-red-500 focus:ring-red-400 placeholder:text-red-500"
                                                : "focus:ring-dark-green focus:bg-opacity-80"
                                            }`}
                                            placeholder={lastName}
                                        />
                                    </div>
                                    <div className="w-80 flex flex-col">
                                        <div>Email</div>
                                        <input 
                                            type="text" 
                                            value={updatedEmail}
                                            onChange={(e) => {setUpdatedEmail(e.target.value)}}
                                            className={`py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80 ${
                                            emailError && !updatedEmail
                                                ? "border border-red-500 focus:ring-red-400 placeholder:text-red-500"
                                                : "focus:ring-dark-green focus:bg-opacity-80"
                                            }`}
                                            placeholder={email}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5 mt-5">
                                    <input 
                                        type="submit" 
                                        value="Save Changes" 
                                        className="ml-2 w-fit px-5 font-bold py-2 rounded-lg bg-dark-green text-white cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex-3 flex-col border-dark-green-octa border shadow-lg shadow-dark-green-octa py-5 px-5 rounded-lg">
                            <form onSubmit = {(e) => handlePasswordChange(e)}>
                                <div className="font-semibold">Password</div>
                                <div className="flex flex-col mt-3 ml-2">
                                    <div>Current password</div>
                                    <input 
                                        type="password" 
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        className={`py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 w-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80 ${
                                        currentPasswordError && !currentPassword
                                            ? "border border-red-500 focus:ring-red-400 placeholder:text-red-500"
                                            : "focus:ring-dark-green focus:bg-opacity-80"
                                        }`} 
                                        placeholder={currentPasswordError ? currentPasswordError : "Put your current password..."}
                                    />
                                </div>

                                <div className="flex flex-col mt-3 ml-2">
                                    <div>New password</div>
                                    <input 
                                        type="password" 
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className={`py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 w-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80 ${
                                        newPasswordError && !newPassword
                                            ? "border border-red-500 focus:ring-red-400 placeholder:text-red-500"
                                            : "focus:ring-dark-green focus:bg-opacity-80"
                                        }`}
                                        placeholder={newPasswordError ? newPasswordError : "Put your new password..."}
                                    />
                                </div>
                                <div className="flex flex-row mt-5 gap-5 ml-2">
                                    <input 
                                        type="submit" 
                                        value="Save Changes" 
                                        className="w-fit px-5 font-bold py-2 rounded-lg bg-dark-green text-white cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className={`absolute w-6xl h-[550px] transition-all duration-700 delay-75 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    <svg 
                        width="100%" 
                        height="100%" 
                        className="absolute inset-0 drop-shadow-[0px_0px_15px_rgba(0,0,0,0.25)] z-0"
                    >
                        <defs>
                            <mask id="cutout-mask">
                                <rect width="100%" height="100%" fill="white" />
                                <circle cx="50%" cy="0" r="100" fill="black" />
                            </mask>
                        </defs>
                        
                        <rect 
                            width="100%" 
                            height="100%" 
                            rx="30" 
                            ry="30"
                            fill="white"
                            stroke="rgba(1,50,55,0.15)"
                            strokeWidth="1"
                            mask="url(#cutout-mask)"
                        />
                    </svg>
                </div>
                
                <div className="absolute top-[135px] left-1/2 -translate-x-1/2 z-10">
                    <img 
                        src="src/assets/profile_pic.svg" 
                        alt="" 
                        className={`h-[176px] w-[176px] cursor-pointer drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] transition-all duration-700 hover:scale-105 ${
                            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        } 
                        ${validRequest ? 'animate-[spin_0.5s_linear]' : ''}
                        `}
                        
                    />
                    {validRequest && (
                        <div className="absolute inset-0 flex items-center justify-center animate-[fadeIn_0.3s_ease-in-out]">
                            <div className="w-[176px] h-[176px] rounded-full bg-green bg-opacity-20  flex items-center justify-center animate-[scaleIn_0.5s_ease-out]">
                                <svg 
                                    className="w-24 h-24 text-white animate-[checkmark_0.6s_ease-in-out]" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="3"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M5 13l4 4L19 7"
                                        className="animate-[drawCheck_0.6s_ease-in-out_forwards]"
                                        style={{
                                            strokeDasharray: '20',
                                            strokeDashoffset: '20',
                                        }}
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
                
                <style>{`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    
                    @keyframes scaleIn {
                        from { transform: scale(0); }
                        to { transform: scale(1); }
                    }
                    
                    @keyframes checkmark {
                        from { transform: scale(0) rotate(-45deg); }
                        to { transform: scale(1) rotate(0deg); }
                    }
                    
                    @keyframes drawCheck {
                        to { stroke-dashoffset: 0; }
                    }
                `}</style>
            </div>
        </div>
    );
}

export default ProfilePage;