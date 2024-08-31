import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext';
import '@/components/ControllerBar/SwitchMode/switchMode.css'
import {SvgSystem, SvgLight, SvgDark} from '@/components/ControllerBar/index'

type SwitchModeProps = {
  theme?: string
  handleSwitchMode?: () => void
}

const SwitchMode: React.FunctionComponent<SwitchModeProps> = () => {

  const all = (el: string | any): NodeListOf<any> => document.querySelectorAll(el);
  const [index, setIndex] = useState(0)
  const [anim, setAnim] = useState(false)
  const [switchStart, setSwitchStart] = useState(true)
  const { mode, setMode } = useContext(ThemeContext)

  const handleMode = (e: { target: { name: string } }) => {
    setMode((prevState: string) => e.target?.name || prevState);
    console.log(e.target?.name);
  }
  
  const handleSwitchMode = useCallback(() => {
    setSwitchStart(false)
    all('div.switch label').forEach(el => el?.classList?.remove('active')) ;
    
    setTimeout(() =>
    setAnim(true)
    , 500)

    setIndex((prev: number) => index === 2 ? 0 : prev + 1) 
    anim === true ? all('div.switch label')[index]?.classList.add('active') : null
    const input: any = document.querySelector('div.switch label.active input')
    const value = input?.value
    setMode(value)
    // console.log(index);
  } , [anim, index, setMode])
  
  useEffect(() => {
    if(switchStart === true) {
      handleSwitchMode()
      document.querySelectorAll('div.switch label')[0].classList.add('active')
      setMode('auto')
    }
  }, [handleSwitchMode, setMode, switchStart])

  return (
    <>
      <div className={'switch'} onClick={handleSwitchMode}>

        <div className='flex switch-inner' >
          
          <label htmlFor="autoID" className='mode'>System
            <input type='radio' id='autoID' name='SwitchMode' value='auto' checked={mode === 'auto'} />
            <SvgSystem />
          </label>

          <label htmlFor="lightID" className='mode'>Light
            <input type='radio' id='lightID' name='SwitchMode' value='light' checked={mode === 'light'} />
            <SvgLight />
          </label>

          <label htmlFor="darkID" className='mode'>Dark
            <input type='radio' id='darkID' name='SwitchMode' value='dark' checked={mode === 'dark'} />
            <SvgDark />
          </label>


        </div>
      </div >

    </>
  )
}

export default SwitchMode





