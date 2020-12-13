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
            className={`hero__module ${isMounted ? 'mounted' : ''}`} 
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
                <div className="text-cta">
                    <span className="title">Joshua</span>
                    <h1 className="sub-title cta-sizing">Joshua Roper, front end developer based in Dallas.</h1>
                    <div className="text-cta-bottom-content cta-sizing">
                        
                        <div className="row-one">
                            <SocialIcons 
                                iconClassName="social-icon"
                                className="social-icons" 
                            />
                            <div className="skill">
                                Javascript (ES8)
                            </div>
                        </div>
                        <div className="row-two">
                            <div className="skill larger-mobile">Node Js</div>
                            <div className="skill">React</div>
                            <div className="skill">Svelte</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Hero;
