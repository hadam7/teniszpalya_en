function CourtCardMid({ court, active = false, onClick}) {
    
    return (
        <div className={`flex flex-col ${court.disabled ? "opacity-50 pointer-events-none" : `${active ? "bg-dark-green" : "bg-white"}`} shadow-md rounded-[24px] w-[200px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer`} onClick={onClick}>
            <div className="bg-green h-[96px] w-[200px] border-dark-green-half border rounded-t-[24px] "/>
            <div className="flex flex-col px-3 py-4">
                <div className={`font-bold ${active ? "text-white" : "text-dark-green"} text-[20px]`}>Tennis Court #{court.id}</div>
                <div className="flex flex-row gap-2">
                    <div className={`font-regular ${active ? "text-white" : "text-dark-green-half"} text-[18px]`}>{court.material}</div>
                    <div className={`font-semibold ${active ? "text-white" : "text-dark-green-half"} text-[18px]`}>{court.outdoors ? "Outdoor" : "Indoor"}</div>
                </div>
            </div>
        </div>
  );
}

export default CourtCardMid;