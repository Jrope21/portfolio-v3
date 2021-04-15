import React from 'react'
import './styles.scss'

import GridCanvas from '../grid-canvas'

import { useIsMounted } from '@hooks/useIsMounted';

export default function IntroAnimation() {

    const [isMounted] = useIsMounted();

    return (
        <div className={`intro-animation__module ${isMounted ? 'is-mounted' : ''}`}>
            <div className="styled-canvas-wrapper">
                <GridCanvas />
            </div>    
            <div className="intro-name">
                Joshua
            </div>
            <div className="intro-content-container">   
          
               
            </div>
        </div>
    )
}
