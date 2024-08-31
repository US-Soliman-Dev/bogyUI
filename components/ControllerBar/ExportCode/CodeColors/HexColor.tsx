import React, { useState, useContext, useEffect } from 'react'
import '@/components/ControllerBar/ExportCode/ExportCode.css'
import { ColorsContext } from '@/context/ColorsContext'


type ExportHexCodeProps = {
    schemeName?: string | any
    dark?: {} | any
    light?: {} | any
    code?: string | any
    openExport?: boolean | any
    activeRandomColor?: boolean | any
}

const ExportHexCode: React.FunctionComponent<ExportHexCodeProps> = ({ code }) => {
    const { darkHex, lightHex } = useContext(ColorsContext)
    const { primary_darkHex, secondary_darkHex, background_darkHex, accent_darkHex, hover_darkHex, text_darkHex } = darkHex
    const { primary_lightHex, secondary_lightHex, background_lightHex, accent_lightHex, hover_lightHex, text_lightHex } = lightHex

    return (
        <>
            {code === 'all' ? (
                <pre className='code'>
                    <code>
                        <h3>{`:root , `}</h3>
                        <h3>{`:root[data-theme="light"] {`}</h3>
                        <p>{`  --primary: ${primary_lightHex};`}</p>
                        <p>{`  --secondary: ${secondary_lightHex};`}</p>
                        <p>{`  --background: ${background_lightHex};`}</p>
                        <p>{`  --accent: ${accent_lightHex};`}</p>
                        <p>{`  --text: ${text_lightHex};`}</p>
                        <p>{`  --hover: ${hover_lightHex};`}</p>
                        <br />
                        <p>{`  --system-primary: ${primary_darkHex};`}</p>
                        <p>{`  --system-secondary: ${secondary_darkHex};`}</p>
                        <p>{`  --system-background: ${background_darkHex};`}</p>
                        <p>{`  --system-accent: ${accent_darkHex};`}</p>
                        <p>{`  --system-text: ${text_darkHex};`}</p>
                        <p>{`  --system-hover: ${hover_darkHex};`}</p>
                        <h3>{`}`}</h3>

                        <h3>{`:root[data-theme="dark"] {`}</h3>
                        <p>{`  --primary: var(--system-primary);`}</p>
                        <p>{`  --secondary: var(--system-secondary);`}</p>
                        <p>{`  --background: var(--system-background);`}</p>
                        <p>{`  --accent: var(--system-accent);`}</p>
                        <p>{`  --text: var(--system-text);`}</p>
                        <p>{`  --hover: var(--system-hover);`}</p>
                        <h3>{`}`}</h3>

                        <h3>{`@media (prefers-color-scheme: dark) { `}</h3>
                        <h3>{`  :root ,`}</h3>
                        <h3>{`  :root[data-theme="auto"] {`}</h3>
                        <p>{`   --primary: var(--system-primary);`}</p>
                        <p>{`   --secondary: var(--system-secondary);`}</p>
                        <p>{`   --background: var(--system-background);`}</p>
                        <p>{`   --accent: var(--system-accent);`}</p>
                        <p>{`   --text: var(--system-text);`}</p>
                        <p>{`   --hover: var(--system-hover);`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'light' ? (
                <pre className='code'>
                    <code>
                        <h3>{`:root[data-theme="light"] {`}</h3>
                        <p>{`  --primary: ${primary_lightHex};`}</p>
                        <p>{`  --secondary: ${secondary_lightHex};`}</p>
                        <p>{`  --background: ${background_lightHex};`}</p>
                        <p>{`  --accent: ${accent_lightHex};`}</p>
                        <p>{`  --text: ${text_lightHex};`}</p>
                        <p>{`  --hover: ${hover_lightHex};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'dark' ? (
                <pre className='code'>
                    <code>
                        <h3>{`:root[data-theme="dark"] {`}</h3>
                        <p>{`  --primary: ${primary_darkHex};`}</p>
                        <p>{`  --secondary: ${secondary_darkHex};`}</p>
                        <p>{`  --background: ${background_darkHex};`}</p>
                        <p>{`  --accent: ${accent_darkHex};`}</p>
                        <p>{`  --text: ${text_darkHex};`}</p>
                        <p>{`  --hover: ${hover_darkHex};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'auto' ? (
                <pre className='code'>
                    <code>
                        <h3>{`@media (prefers-color-scheme: light) {`}</h3>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${primary_lightHex};`}</p>
                        <p>{`  --secondary: ${secondary_lightHex};`}</p>
                        <p>{`  --background: ${background_lightHex};`}</p>
                        <p>{`  --accent: ${accent_lightHex};`}</p>
                        <p>{`  --text: ${text_lightHex};`}</p>
                        <p>{`  --hover: ${hover_lightHex};`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>

                        <h3>{`@media (prefers-color-scheme: dark) {`}</h3>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${primary_darkHex};`}</p>
                        <p>{`  --secondary: ${secondary_darkHex};`}</p>
                        <p>{`  --background: ${background_darkHex};`}</p>
                        <p>{`  --accent: ${accent_darkHex};`}</p>
                        <p>{`  --text: ${text_darkHex};`}</p>
                        <p>{`  --hover: ${hover_darkHex};`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }
        </>
    )
}

export default ExportHexCode