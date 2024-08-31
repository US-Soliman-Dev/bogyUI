import React, { useState, useContext, useEffect } from 'react'
import '@/components/ControllerBar/ExportCode/ExportCode.css'
import { ColorsContext } from '@/context/ColorsContext'
import ExportHexCode from './CodeColors/HexColor'
import ExportHslCode from './CodeColors/HslColor'
import ExportRgbCode from './CodeColors/RgbColor'
import { SvgSystem, SvgLight, SvgDark } from '@/components/ControllerBar/index'


type ShadesTypes = {
    schemeName?: string | any
    dark?: {} | any
    light?: {} | any
    openExport?: boolean | any
    activeRandomColor?: boolean | any
}



const ExportCode: React.FunctionComponent<ShadesTypes> = ({ schemeName }) => {

    const { setOpenExport, openExport, setColorType, colorType } = useContext(ColorsContext)
    const [code, setCode] = useState('all')

    const handleExportCode = (e: { target: { value: string } }) => {
        setCode(e?.target?.value);
    }
    const handleColorType = (e: { target: { value: string } }) => {
        setColorType(e?.target?.value);
    }

    return (
        <>
            {
                openExport ? (
                    <div className='export-code'>
                        <button type='button' className='close' onClick={() => setOpenExport(false)}>X</button>
                        <h3> {schemeName} &#128512; </h3>
                        {}
                        <h1> Theme ( {code.toUpperCase()} )
                            <div>
                                {code === 'all' ? (<><SvgSystem />  <SvgLight />  <SvgDark /></>) : null}
                                {code === 'auto' ? (<><SvgSystem /> <span>Only default System </span> </>) : null}
                                {code === 'light' ? (<><SvgLight /> <span>Only Light Mode</span> </>) : null}
                                {code === 'dark' ? (<><SvgDark /> <span>Only Dark Mode</span>  </>) : null}
                            </div>

                        </h1>

                        <div className='colorType'>
                            <label htmlFor="colorType-hex" className='type-label hex' data-colorType={colorType === 'hex' ? 'active' : null}> HEX
                                <input type="radio" id='colorType-hex' name='colorType' checked={colorType === 'hex'} value={'hex'} onChange={handleColorType} />
                            </label>
                            <label htmlFor="colorType-hsl" className='type-label hsl' data-colorType={colorType === 'hsl' ? 'active' : null}> HSL
                                <input type="radio" id='colorType-hsl' name='colorType' checked={colorType === 'hsl'} value={'hsl'} onChange={handleColorType} />
                            </label>
                            <label htmlFor="colorType-rgb" className='type-label rgb' data-colorType={colorType === 'rgb' ? 'active' : null}> RGB
                                <input type="radio" id='colorType-rgb' name='colorType' checked={colorType === 'rgb'} value={'rgb'} onChange={handleColorType} />
                            </label>
                        </div>

                        <div className='code-box'>
                            <div className='code-setting'>
                                <label htmlFor="code-auto" data-code={code === 'auto' ? 'active' : null}> Auto
                                    <input type="radio" id='code-auto' name='code' checked={code === 'auto'} value={'auto'} onChange={handleExportCode} />
                                </label>
                                <label htmlFor="code-light" data-code={code === 'light' ? 'active' : null}> light
                                    <input type="radio" id='code-light' name='code' checked={code === 'light'} value={'light'} onChange={handleExportCode} />
                                </label>
                                <label htmlFor="code-dark" data-code={code === 'dark' ? 'active' : null}> dark
                                    <input type="radio" id='code-dark' name='code' checked={code === 'dark'} value={'dark'} onChange={handleExportCode} />
                                </label>
                                <label htmlFor="code-all" data-code={code === 'all' ? 'active' : null}> All Theme
                                    <input type="radio" id='code-all' name='code' checked={code === 'all'} value={'all'} onChange={handleExportCode} />
                                </label>
                            </div>

                            {colorType === 'hex' ? (<>
                                <ExportHexCode code={code} />
                            </>) : null}

                            {colorType === 'hsl' ? (<>
                                <ExportHslCode code={code} />
                            </>) : null}

                            {colorType === 'rgb' ? (<>
                                <ExportRgbCode code={code} />
                            </>) : null}

                        </div>
                    </div>
                ) : null
            }
        </>

    )
}

export default ExportCode