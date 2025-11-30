import { createContext, useState, useContext } from "react";

const ReserveMenuContext = createContext();

export function ReserveMenuProvider({ children }) {
    const [isReserveMenuVisible, setIsReserveMenuVisible] = useState(false);

    return (
        <ReserveMenuContext.Provider value={{ isReserveMenuVisible, setIsReserveMenuVisible }}>
            {children}
        </ReserveMenuContext.Provider>
    );
}

export function useReserveMenu() {
    return useContext(ReserveMenuContext);
}