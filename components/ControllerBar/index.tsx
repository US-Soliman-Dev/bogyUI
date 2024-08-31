"use client"
import '@/components/ControllerBar/controllerBar.css'
import React, { useState, useContext, useEffect } from 'react'

import SwitchMode from '@/components/ControllerBar/SwitchMode';
import { ColorsContext } from '@/context/ColorsContext';
import CustomColors from '@/components/ControllerBar/CustomColors';
import Schemes from './Schemes';



type ControllerProps = {
    random?: () => number;
    colorValue?: {} | any
}


const ControllerBar: React.FunctionComponent<ControllerProps> = () => {
    const [act, setAct] = useState(false)
    const { setOpenExport, setActiveRandomColor, setRandom, setColorType,  setActiveInputColor } = useContext(ColorsContext)

    ////////////////////////////////////////////////////////////////////////////


    const handleOpenExport = () => {
        setOpenExport((priv: boolean) => !priv)
        setColorType('hex')
    }


    const handleColors = () => {
        setColorType('random')
        setActiveInputColor(false)
        setOpenExport(false)
        setRandom({
            hue_a: Math.floor(Math.random() * 359),
            hue_b: Math.floor(Math.random() * 359),
            hue_c: Math.floor(Math.random() * 359),
            max_a: Math.floor(Math.random() * 10),
            max_b: Math.floor(Math.random() * 10),
        })
        setActiveRandomColor(true)
        setAct(priv => !priv)
    }



    return (
        <>
            <div className={'controller'}>
                <div className={'layer'}></div>
                <CustomColors />
                <button className={`random-button ${act ? 'active' : null} `} onClick={handleColors}>
                    <div className='d1'>
                        <span className={`s1 ${act ? 'active' : null}`}>&#10047;</span>
                        <span className={`s2 ${act ? 'active' : null}`}>&#10047;</span>
                    </div>
                    <div className='d2'>

                        <span className={`s3 ${act ? 'active' : null}`}>&#10047;</span>
                        <span className={`s3 ${act ? 'active' : null}`}>&#10047;</span>
                        <span className={`s4 ${act ? 'active' : null}`}>&#10047;</span>
                    </div>
                    <div className='d3'>
                        <span className={`s1 ${act ? 'active' : null}`}>&#10047;</span>
                        <span className={`s2 ${act ? 'active' : null}`}>&#10047;</span>
                    </div>

                </button>
                <button className='export-button' onClick={handleOpenExport}>{`</>`}</button>

                <SwitchMode />

                <Schemes/>

            </div>
        </>
    )
}

export default ControllerBar


type SvgProps = {
    color?: string
}

export const SvgLight = ({ color }: SvgProps): React.JSX.Element => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill={`${color}`}>
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
            </svg>
        </>
    )
}

export const SvgDark = ({ color }: SvgProps): React.JSX.Element => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill={`${color}`}>
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
            </svg>
        </>
    )
}
export const SvgSystem = ({ color }: SvgProps): React.JSX.Element => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill={`${color}`} >
                <path d="M0-160v-80h80v-600h800v600h80v80H0Zm400-80h160v-40H400v40ZM160-360h640v-400H160v400Zm0 0v-400 400Z" stroke={`${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}




{/* 
    <input type="radio" id='dark' name='theme' checked={theme === 'dark'} value={'dark'} onChange={handleMode} />
 */}