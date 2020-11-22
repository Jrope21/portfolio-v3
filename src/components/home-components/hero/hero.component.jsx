import React from 'react'
import './hero.styles.scss'

import styles from '@styles/variables.scss';

import SocialIcons from '@common-components/social-icons/social-icons.component';

import HeroImageMobile from '@images/home/portfolio_hero_mobile.jpg'
import HeroImageDesktop from '@images/home/portfolio_hero_desktop.jpg'

export default function Hero() {
    return (
        <section className="hero__module">
            <picture className="hero-image">
                <source 
                    srcSet={HeroImageDesktop}
                    media={`min-width: ${styles.breakpointSm}`} 
                />
                <img src={HeroImageMobile} alt="A Front End Developer typing on a laptop"/>
            </picture>
            <div className="container">
                <div className="text-cta">
                    <span className="title">Joshua</span>
                    <h1 className="sub-title cta-sizing">Joshua Roper, Front End Developer based in Dallas.</h1>
                    <div className="text-cta-bottom-content cta-sizing">
                        
                        <div className="row-one">
                            <SocialIcons className="social-icons" />
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
}
