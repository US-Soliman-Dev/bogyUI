"use client"
import React, { createContext, useState, useEffect, useMemo } from 'react'

///////////////////////////////////////////////////////////////// Types 
type ColorsContext = {
    scheme?: string
    setScheme: React.Dispatch<React.SetStateAction<string>>

    openExport?: boolean
    setOpenExport: React.Dispatch<React.SetStateAction<boolean>>

    activeColor?: boolean
    setActiveColor: React.Dispatch<React.SetStateAction<boolean>>

    random?: {} | any
    setRandom: React.Dispatch<React.SetStateAction<{} | any>>
}
type ColorsProviderProps = {
    children?: React.ReactNode
}
////////////////////////////////////////////////////////////////////////////////// 

export const ColorsContext = createContext<ColorsContext | any>(null)   ///// Context

const ColorsProvider: React.FunctionComponent<ColorsProviderProps> = ({ children }) => {

    const all = (el: string | any): NodeListOf<any> => document.querySelectorAll(el);
    const elm = (el: string | any) => document.querySelector(el);
    const [scheme, setScheme] = useState<string>('mix')
    const [openExport, setOpenExport] = useState(false)
    const [activeRandomColor, setActiveRandomColor] = useState(false)
    const [activeInputColor, setActiveInputColor] = useState(false)
    const [colorType, setColorType] = useState('random')

    const [random, setRandom] = useState<React.SetStateAction<{} | any>>({
        hue_a: null,
        hue_b: null,
        hue_c: null,
        max_a: null,
        max_b: null,
    })

    const [light, setLight] = useState({
        primary_light: `hsl(145, 46%, 55%)`,
        secondary_light: `hsl(50, 35%, 86%)`,
        background_light: `hsl(27, 43%, 96%)`,
        accent_light: `hsl(31, 76%, 55%)`,
        text_light: `hsl(146, 11%, 25%)`,
        hover_light: `hsl(165, 51%, 75%)`,
    })
    const [dark, setDark] = useState({
        primary_dark: `hsl(145, 51%, 65%)`,
        secondary_dark: `hsl(47, 11%, 25%)`,
        background_dark: `hsl(30, 11%, 15%)`,
        accent_dark: `hsl(31, 86%, 55%)`,
        text_dark: `hsl(145, 92%, 95%)`,
        hover_dark: `hsl(165, 71%, 65%)`,
    })

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [darkHex, setDarkHex] = useState({
        primary_darkHex: ``,
        secondary_darkHex: ``,
        background_darkHex: ``,
        accent_darkHex: ``,
        text_darkHex: ``,
        hover_darkHex: ``,
    })

    const [lightHex, setLightHex] = useState({
        primary_lightHex: ``,
        secondary_lightHex: ``,
        background_lightHex: ``,
        accent_lightHex: ``,
        text_lightHex: ``,
        hover_lightHex: ``,
    })

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [lightHsl, setLightHsl] = useState({
        primary_lightHsl: ``,
        secondary_lightHsl: ``,
        background_lightHsl: ``,
        accent_lightHsl: ``,
        text_lightHsl: ``,
        hover_lightHsl: ``,
    })
    const [darkHsl, setDarkHsl] = useState({
        primary_darkHsl: ``,
        secondary_darkHsl: ``,
        background_darkHsl: ``,
        accent_darkHsl: ``,
        text_darkHsl: ``,
        hover_darkHsl: ``,
    })


    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [lightRgb, setLightRgb] = useState({
        primary_lightRgb: ``,
        secondary_lightRgb: ``,
        background_lightRgb: ``,
        accent_lightRgb: ``,
        text_lightRgb: ``,
        hover_lightRgb: ``,
    })
    const [darkRgb, setDarkRgb] = useState({
        primary_darkRgb: ``,
        secondary_darkRgb: ``,
        background_darkRgb: ``,
        accent_darkRgb: ``,
        text_darkRgb: ``,
        hover_darkRgb: ``,
    })

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const handleControlColors = useMemo(() => ({
        hslToHex,
        hexToHSL,
        hexToRGB,
        all,
        elm,

        activeInputColor, setActiveInputColor,

        colorType, setColorType,

        light, setLight,
        dark, setDark,

        lightHex, setLightHex,
        darkHex, setDarkHex,

        lightHsl, setLightHsl,
        darkHsl, setDarkHsl,

        lightRgb, setLightRgb,
        darkRgb, setDarkRgb,

        scheme, setScheme,

        openExport, setOpenExport,

        activeRandomColor,setActiveRandomColor,

        random, setRandom,
    }), [activeInputColor, activeRandomColor, colorType, dark, darkHex, darkHsl, darkRgb, light, lightHex, lightHsl, lightRgb, openExport, random, scheme])

    // console.log(light.primary_light);
    // console.log(random.hue_b, random.hue_a);
    return (
        <ColorsContext.Provider value={{ ...handleControlColors }}>
            {children}
        </ColorsContext.Provider>
    )
}

export default ColorsProvider







// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////





function hexToHSL(hex: string): string {
    // Remove the '#' character if present
    const cleanedHex = hex.replace('#', '');

    // Convert the cleaned hex value to RGB
    const red = parseInt(cleanedHex.substr(0, 2), 16) / 255;
    const green = parseInt(cleanedHex.substr(2, 2), 16) / 255;
    const blue = parseInt(cleanedHex.substr(4, 2), 16) / 255;

    // Find the maximum and minimum values of RGB
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);

    // Calculate the hue
    let hue = 0;
    if (max === min) {
        hue = 0;
    } else if (max === red) {
        hue = ((green - blue) / (max - min)) % 6;
    } else if (max === green) {
        hue = (blue - red) / (max - min) + 2;
    } else {
        hue = (red - green) / (max - min) + 4;
    }
    hue = Math.round(hue * 60);

    // Calculate the lightness
    const lightness = (max + min) / 2;

    // Calculate the saturation
    let saturation = 0;
    if (max !== min) {
        saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }
    saturation = Math.round(saturation * 100);

    console.log(hue);
    // Return the HSL value as a string
    // let hueE = hue < 0 ? hue.toString().split('').slice(1)?.join('') : hue;
    let hueE = hue < 0 ? hue.toString().replace('-' , '') : hue;
    console.log(hueE);
    
    return `hsl(${hueE}, ${saturation}%, ${Math.round(lightness * 100)}%)`;
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function hexToRGB(hex: string): string {
    // Remove the '#' character if present
    const cleanedHex = hex.replace('#', '');

    // Parse the hexadecimal values for red, green, and blue
    const red = parseInt(cleanedHex.substr(0, 2), 16);
    const green = parseInt(cleanedHex.substr(2, 2), 16);
    const blue = parseInt(cleanedHex.substr(4, 2), 16);

    // Return the RGB value as a string
    return `rgb(${red}, ${green}, ${blue})`;
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function hslToHex(hsl: string): string {
    // Remove the 'hsl(' and ')' characters and split the values
    const values = hsl.replace('hsl(', '').replace(')', '').split(',');

    // Extract the HSL values
    const hue = parseInt(values[0].trim(), 10);
    const saturation = parseInt(values[1]?.trim(), 10);
    const lightness = parseInt(values[2]?.trim(), 10);

    // Normalize hue value to [0, 360)
    const normalizedHue = ((hue % 360) + 360) % 360;

    // Normalize saturation and lightness values to [0, 1]
    const normalizedSaturation = Math.max(0, Math.min(100, saturation)) / 100;
    const normalizedLightness = Math.max(0, Math.min(100, lightness)) / 100;

    // Calculate RGB values
    const c = (1 - Math.abs(2 * normalizedLightness - 1)) * normalizedSaturation;
    const x = c * (1 - Math.abs(((normalizedHue / 60) % 2) - 1));
    const m = normalizedLightness - c / 2;

    let red = 0,
        green = 0,
        blue = 0;

    if (normalizedHue >= 0 && normalizedHue < 60) {
        red = c;
        green = x;
    } else if (normalizedHue >= 60 && normalizedHue < 120) {
        red = x;
        green = c;
    } else if (normalizedHue >= 120 && normalizedHue < 180) {
        green = c;
        blue = x;
    } else if (normalizedHue >= 180 && normalizedHue < 240) {
        green = x;
        blue = c;
    } else if (normalizedHue >= 240 && normalizedHue < 300) {
        red = x;
        blue = c;
    } else if (normalizedHue >= 300 && normalizedHue < 360) {
        red = c;
        blue = x;
    }

    // Convert RGB values to [0, 255] range
    const normalizedRed = Math.round((red + m) * 255);
    const normalizedGreen = Math.round((green + m) * 255);
    const normalizedBlue = Math.round((blue + m) * 255);

    // Convert RGB values to hexadecimal string
    const hexRed = normalizedRed.toString(16).padStart(2, '0');
    const hexGreen = normalizedGreen.toString(16).padStart(2, '0');
    const hexBlue = normalizedBlue.toString(16).padStart(2, '0');

    // Return the hexadecimal color value
    return `#${hexRed}${hexGreen}${hexBlue}`;
}



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// useEffect( () => {
//     const script = document.createElement("script");
  
//     script.src = "/js/homepage.js";
//     script.async = true;
  
//     document.body.appendChild(script);
    
//     })