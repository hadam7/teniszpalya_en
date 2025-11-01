function CourtCard({ court }) {
    return (
        <div className="bg-white rounded-[24px] w-3xs border border-gray-200 p-[23px] h-[380px] z-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-green group cursor-pointer">
            <div className="h-[220px] w-[212px] bg-green rounded-[10px] overflow-hidden relative transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"></div>
            <div className="pt-4">
                <h2 className="text-xl font-bold text-dark-green mb-2 transition-colors duration-300 group-hover:text-green">
                    Tennis court #{court.id}
                </h2>
                <span className="text-lg text-dark-green-half transition-all duration-300 group-hover:text-dark-green">
                    Type: {court.material}
                </span>
                <div className="text-dark-green-half font-semibold mt-2 transition-all duration-300 group-hover:text-dark-green group-hover:translate-x-1">
                    {court.outdoors ? "Outdoor" : "Indoor"}
                </div>
            </div>
        </div>
    );
}

export default CourtCard;