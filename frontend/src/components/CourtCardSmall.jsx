function CourtCardSmall({ court, onClick, active }) {
    
    return (
        <div className={`flex flex-row ${active ? "bg-dark-green " : "bg-white"} rounded-[20px] items-center gap-4 shadow-md hover:scale-101 active:scale-95 transition-all duration-300 cursor-pointer`} onClick={onClick}>
            <div className="bg-green w-[70px] h-full rounded-l-[20px]"/>
            <div className="flex flex-col py-3 px-[10px]">
                <div className={`font-bold ${active ? "text-white" : "text-dark-green"} text-[20px]`}>Tennis Court #{court.id}</div>
                <div className="flex flex-row gap-2">
                    <div className={`font-regular ${active ? "text-white" : "text-dark-green-half"} text-[18px]`}>{court.material}</div>
                    <div className={`font-semibold ${active ? "text-white" : "text-dark-green-half"} text-[18px]`}>{court.outdoors ? "Outdoor" : "Indoor"}</div>
                </div>
            </div>
        </div>
  );
}

export default CourtCardSmall;