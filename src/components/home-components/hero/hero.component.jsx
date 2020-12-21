import React, { useEffect, useState } from 'react'
import './hero.styles.scss'

import styles from '@styles/variables.scss';

import SocialIcons from '@common-components/social-icons/social-icons.component';

import HeroImageMobile from '@images/home/portfolio_hero_mobile.jpg'
import HeroImageTablet from '@images/home/portfolio_hero_tablet.jpg'
import HeroImageDesktop from '@images/home/portfolio_hero_desktop.jpg'

const Hero = React.forwardRef(({ sectionRef }) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <section 
            className={`hero__module ${isMounted ? 'activate-animations__mount' : ''}`} 
            ref={sectionRef}
            
        >
            <picture className="hero-image">
            <source 
                    srcSet={HeroImageDesktop}
                    media={`(min-width: ${styles.breakpointLg}px)`} 
                />
                <source 
                    srcSet={HeroImageTablet}
                    media={`(min-width: ${styles.breakpointSm}px)`} 
                />
                
                <img src={HeroImageMobile} alt="A Front End Developer typing on a laptop"/>
            </picture>
            <div className="container">
                <div className="text-cta" 
                    
                >
                    <span 
                        style={{ transitionDelay: `250ms` }}
                        className="title fade-up__mount" 
                    >Joshua</span>

                    <h1 
                        style={{ transitionDelay: `350ms` }} 
                        className="sub-title fade-up__mount cta-sizing"
                    >Joshua Roper, front end developer based in Dallas.</h1>

                    <div className="text-cta-bottom-content cta-sizing">
                        
                        <div 
                            style={{ transitionDelay: `350ms` }} 
                            className="row-one fade-up__mount"
                        >
                            <SocialIcons 
                                style={{ transitionDelay: `450ms` }} 
                                iconClassName="social-icon"
                                className="social-icons fade-up__mount" 
                            />
                            <div 
                                style={{ transitionDelay: `650ms` }} 
                                className="skill fade-up__mount"
                            >
                                Javascript (ES8)
                            </div>
                        </div>
                        <div 
                            style={{ transitionDelay: `550ms` }} 
                            className="row-two fade-up__mount"
                        >
                            <div 
                                style={{ transitionDelay: `750ms` }} 
                                className="skill larger-mobile fade-up__mount"
                            >Node Js</div>
                            <div 
                                style={{ transitionDelay: `850ms` }} 
                                className="skill fade-up__mount"
                            >React</div>
                            <div  
                                style={{ transitionDelay: `950ms` }} 
                                className="skill fade-up__mount"
                            >Svelte</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Hero;
