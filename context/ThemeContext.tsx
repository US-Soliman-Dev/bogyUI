"use client"
import React, { createContext, useState ,useEffect} from 'react'

///////////////////////////////////////////////////////////////// Types 
type Theme = 'auto' | 'light' | 'dark'
type ThemeContext = {
    mode: string
    setMode : React.Dispatch<React.SetStateAction<Theme>>
}
type ThemeProviderProps = {
    children?: React.ReactNode
}
////////////////////////////////////////////////////////////////////////////////// 

export const ThemeContext  = createContext<ThemeContext | any>('auto')   ///// Context

const ThemeProvider : React.FunctionComponent<ThemeProviderProps> = ({children}) => {

    const [mode, setMode] = useState('auto')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode)       
    }, [mode])

    return (
        <ThemeContext.Provider value={{mode , setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider