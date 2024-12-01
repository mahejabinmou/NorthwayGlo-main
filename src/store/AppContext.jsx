/* eslint-disable react/prop-types */

import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isDropdown2Open, setIsDropdown2Open] = useState(false)

    return (
        <AppContext.Provider value={{ isDropdown2Open, setIsDropdown2Open }}>
            {children}
        </AppContext.Provider>
    )
}
