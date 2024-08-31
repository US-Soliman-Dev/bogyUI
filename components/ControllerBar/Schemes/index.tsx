import '@/components/ControllerBar/Schemes/schemes.css'
import React, { useState, useContext, useEffect } from 'react'
import Shades from '@/components/ControllerBar/Schemes/Colors/Shades'
import MixColors from '@/components/ControllerBar/Schemes/Colors/MixColors';
import { ThemeContext } from '@/context/ThemeContext';
import { ColorsContext } from '@/context/ColorsContext';

const Schemes = () => {

   const { mode } = useContext(ThemeContext)
   const { scheme, setScheme, setOpenExport, setColorType, setActiveRandomColor } = useContext(ColorsContext)

   const handleScheme = (e: { target: { value: string } }) => {
      setScheme(e.target.value)
      setColorType('random')
      // setActiveRandomColor(true)
      setOpenExport(false)
   }



   return (
      <>

               <div className='scheme-box'>
                  <label htmlFor="shades-id" className={`${scheme === 'shades' ? 'active' : ''}`}>
                     <span className='title'>Shades</span>
                     <input
                        type="radio"
                        id='shades-id'
                        name='scheme'
                        checked={scheme === 'shades'}
                        value={'shades'}
                        onChange={handleScheme}
                     />
                     <span className='icon'>{scheme === 'shades' ? <div>&#10047;</div> : null}</span>
                  </label>

                  <label htmlFor="mix-id" className={`${scheme === 'mix' ? 'active' : ''}`}>
                     <span className='title'>Mix Color</span>
                     <input
                        type="radio"
                        id='mix-id'
                        name='scheme'
                        checked={scheme === 'mix'}
                        value={'mix'}
                        onChange={handleScheme}
                     />
                     <span className='icon'>{scheme === 'mix' ? <div>&#10047;</div> : null}</span>
                  </label>
               </div>


               {
                  scheme === 'shades' ? (
                     <>
                        <Shades />
                     </>
                  ) : null
               }
               {
                  scheme === 'mix' ? (
                     <>
                        <MixColors />
                     </>
                  ) : null
               }

      </>
   )
}

export default Schemes