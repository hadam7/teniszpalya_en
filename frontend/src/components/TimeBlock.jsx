function TimeBlock({time, onClick, active = false, disabled = false}) {
    return (
        <div className={`w-full h-[60px] py-3 border border-dark-green-octa rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 shadow-md ${disabled ? "opacity-50 bg-gray-200 pointer-events-none" : `${active ? "bg-dark-green text-white" : "bg-white text-dark-green"}`} `} onClick={onClick}>
            {time}
        </div>
    );
}

export default TimeBlock;