import React, { useState, useEffect, useContext } from 'react'
import '@/components/ControllerBar/CustomColors/customColors.css'
import { ColorsContext } from '@/context/ColorsContext'
import { ThemeContext } from '@/context/ThemeContext'



const CustomColors = () => {

    // const { primary, secondary, accent, background, text } = inputColor
    const { mode, setMode } = useContext(ThemeContext)
    const { setActiveRandomColor , setLightRgb, setDarkRgb, dark, light, darkHex, lightHex, setColorType, colorType, setLight, setDark, setLightHex, setDarkHex, hslToHex, activeInputColor, setActiveInputColor,setDarkHsl, setLightHsl, hexToHSL, hexToRGB, setOpenExport} = useContext(ColorsContext)

    const { primary_dark, secondary_dark, background_dark, accent_dark, hover_dark, text_dark } = dark
    const { primary_light, secondary_light, background_light, accent_light, hover_light, text_light } = light

    const { primary_darkHex, secondary_darkHex, background_darkHex, accent_darkHex, hover_darkHex, text_darkHex } = darkHex
    const { primary_lightHex, secondary_lightHex, background_lightHex, accent_lightHex, hover_lightHex, text_lightHex } = lightHex




    ////////////////////////////////////////////////////////////////////////////
    // console.log(inputColor );


    const handleInputDarkColors = (e: { target: { name: string, value: string, parentNode: any } }) => {
        setColorType('hex')
        setActiveInputColor(true)
        setActiveRandomColor(true)

        setDarkHex({ ...darkHex, [e.target.name]: e.target.value })
        e.target.parentNode.style.backgroundColor = e.target.value
        // console.log(primary_darkHex);
    }

    const handleInputLightColors = (e: { target: { name: string, value: string, parentNode: any } }) => {
        setColorType('hex')
        setActiveInputColor(true)
        setActiveRandomColor(true)
        setLightHex({ ...lightHex, [e.target.name]: e.target.value })
        e.target.parentNode.style.backgroundColor = e.target.value
        // console.log(primary_lightHex);
    }


    const handleColorType = () => {
        setColorType('hex')
        setOpenExport(false)
        if (activeInputColor === false) {
            setColorType('random')
        }
    }
    
    console.log(colorType);
    console.log(activeInputColor);
    // console.log(activeRandomColor);

    useEffect(() => {

        if (colorType === 'random') {
            setDarkHex({
                primary_darkHex: hslToHex(primary_dark),
                secondary_darkHex: hslToHex(secondary_dark),
                accent_darkHex: hslToHex(accent_dark),
                hover_darkHex: hslToHex(hover_dark),
                background_darkHex: hslToHex(background_dark),
                text_darkHex: hslToHex(text_dark),
            })

            setLightHex({
                primary_lightHex: hslToHex(primary_light),
                secondary_lightHex: hslToHex(secondary_light),
                accent_lightHex: hslToHex(accent_light),
                hover_lightHex: hslToHex(hover_light),
                background_lightHex: hslToHex(background_light),
                text_lightHex: hslToHex(text_light),
            })
        }

        if (colorType === 'hsl') {
            setLightHsl({
                primary_lightHsl: hexToHSL(primary_lightHex),
                secondary_lightHsl: hexToHSL(secondary_lightHex),
                background_lightHsl: hexToHSL(background_lightHex),
                accent_lightHsl: hexToHSL(accent_lightHex),
                text_lightHsl: hexToHSL(text_lightHex),
                hover_lightHsl: hexToHSL(hover_lightHex),
            })
            setDarkHsl({
                primary_darkHsl: hexToHSL(primary_darkHex),
                secondary_darkHsl: hexToHSL(secondary_darkHex),
                background_darkHsl: hexToHSL(background_darkHex),
                accent_darkHsl: hexToHSL(accent_darkHex),
                text_darkHsl: hexToHSL(text_darkHex),
                hover_darkHsl: hexToHSL(hover_darkHex),
            })
        }

        if (colorType === 'rgb') {
            setLightRgb({
                primary_lightRgb: hexToRGB(primary_lightHex),
                secondary_lightRgb: hexToRGB(secondary_lightHex),
                background_lightRgb: hexToRGB(background_lightHex),
                accent_lightRgb: hexToRGB(accent_lightHex),
                text_lightRgb: hexToRGB(text_lightHex),
                hover_lightRgb: hexToRGB(hover_lightHex),
            })
            setDarkRgb({
                primary_darkRgb: hexToRGB(primary_darkHex),
                secondary_darkRgb: hexToRGB(secondary_darkHex),
                background_darkRgb: hexToRGB(background_darkHex),
                accent_darkRgb: hexToRGB(accent_darkHex),
                text_darkRgb: hexToRGB(text_darkHex),
                hover_darkRgb: hexToRGB(hover_darkHex),
            })
        }

        // console.log(colorType);
        // console.log(primary_dark);
        // console.log(primary_darkHex);
    }, [accent_dark, accent_light, colorType, background_dark, background_light, hover_dark, hover_light, hslToHex, primary_dark, primary_darkHex, primary_light, secondary_dark, secondary_light, setDark, setDarkHex, setLight, setLightHex, text_dark, text_light, setLightHsl, primary_lightHex, secondary_lightHex, background_lightHex, accent_lightHex, text_lightHex, hover_lightHex, setDarkHsl, secondary_darkHex, background_darkHex, accent_darkHex, text_darkHex, hover_darkHex, hexToHSL, setLightRgb, setDarkRgb, hexToRGB])


    useEffect(() => {
        const labels = document.querySelectorAll('div.custom-color label')
        if (activeInputColor === false) {
            labels.forEach(label => {
                label.setAttribute('style', '')
                // label?.style?.backgroundColor = ''
            })
        }
    }, [activeInputColor])

    return (
        <>
            <div className='custom-color'>
                {
                    mode === "auto" ? (
                    <>
                    <h1 className='default'>Default system Theme</h1>
                    </>
                    ) : null
                }

                {
                    mode === "dark" ? (
                        <>
                            <h3>Custom Dark Mode</h3>
                            <div className='input-box'>
                                <label className='text' htmlFor="text-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='text-id'
                                        name='text_darkHex'
                                        // value={text_darkHex}
                                        value={activeInputColor ? text_darkHex : hslToHex(text_dark)}
                                        onChange={handleInputDarkColors}
                                    />
                                    <p>Text</p>
                                </label>

                                <label className='background' htmlFor="background-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='background-id'
                                        name='background_darkHex'
                                        value={activeInputColor ? background_darkHex : hslToHex(background_dark)}
                                        onChange={handleInputDarkColors}
                                    />
                                    <p>Background</p>

                                </label>

                                <label className='hover' htmlFor="hover-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='hover-id'
                                        name='hover_darkHex'
                                        value={activeInputColor ? hover_darkHex : hslToHex(hover_dark)}
                                        onChange={handleInputDarkColors}
                                    />
                                    <p>Hover</p>
                                </label>

                                <label className='accent' htmlFor="accent-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='accent-id'
                                        name='accent_darkHex'
                                        value={activeInputColor ? accent_darkHex : hslToHex(accent_dark)}
                                        onChange={handleInputDarkColors}
                                    />
                                    <p>Accent</p>
                                </label>

                                <label className='secondary' htmlFor="secondary-id" >
                                    <input
                                        type="color"
                                        id='secondary-id'
                                        name='secondary_darkHex'
                                        value={activeInputColor ? secondary_darkHex : hslToHex(secondary_dark)}
                                        onChange={handleInputDarkColors}
                                    />
                                    <p>Secondary</p>
                                </label>


                                <label className='primary' htmlFor="primary-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='primary-id'
                                        name='primary_darkHex'
                                        value={activeInputColor ? primary_darkHex : hslToHex(primary_dark)}
                                        onChange={handleInputDarkColors}
                                    />
                                    <p>Primary</p>
                                </label>
                            </div>
                        </>
                    ) : null
                }


                {
                    mode === "light" ? (
                        <>
                            <h3>Custom Light Mode</h3>
                            <div className='input-box'>
                                <label className='text' htmlFor="text-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='text-id'
                                        name='text_lightHex'
                                        value={activeInputColor ? text_lightHex : hslToHex(text_light)}
                                        onChange={handleInputLightColors}
                                    />
                                    <p>Text</p>
                                </label>

                                <label className='background' htmlFor="background-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='background-id'
                                        name='background_lightHex'
                                        value={activeInputColor ? background_lightHex : hslToHex(background_light)}
                                        onChange={handleInputLightColors}
                                    />
                                    <p>Background</p>
                                </label>

                                <label className='hover' htmlFor="hover-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='hover-id'
                                        name='hover_lightHex'
                                        value={activeInputColor ? hover_lightHex : hslToHex(hover_light)}
                                        onChange={handleInputLightColors}
                                    />
                                    <p>Hover</p>
                                </label>

                                <label className='accent' htmlFor="accent-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='accent-id'
                                        name='accent_lightHex'
                                        value={activeInputColor ? accent_lightHex : hslToHex(accent_light)}
                                        onChange={handleInputLightColors}
                                    />
                                    <p>Accent</p>
                                </label>

                                <label className='secondary' htmlFor="secondary-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='secondary-id'
                                        name='secondary_lightHex'
                                        value={activeInputColor ? secondary_lightHex : hslToHex(secondary_light)}
                                        onChange={handleInputLightColors}
                                    />
                                    <p>Secondary</p>
                                </label>

                                <label className='primary' htmlFor="primary-id" onClick={handleColorType}>
                                    <input
                                        type="color"
                                        id='primary-id'
                                        name='primary_lightHex'
                                        value={activeInputColor ? primary_lightHex : hslToHex(primary_light)}
                                        onChange={handleInputLightColors}
                                    />
                                    <p>Primary</p>
                                </label>
                            </div>
                        </>
                    ) : null
                }


            </div>
        </>
    )
}

export default CustomColors