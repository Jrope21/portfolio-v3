import React, { useEffect, useState } from 'react'
import './hero.styles.scss'

import GatsbyImage from "gatsby-image"

import SocialIcons from '@common-components/social-icons/social-icons.component';

// import HeroImageMobile from '@images/home/portfolio_hero_mobile.jpg'
// import HeroImageTablet from '@images/home/portfolio_hero_tablet.jpg'
// import HeroImageDesktop from '@images/home/portfolio_hero_desktop.jpg'

const Hero = React.forwardRef(({ sectionRef, activateAnimations = false, moduleData }) => {

    const {
        hero_image,
        title,
        sub_title,
        skill_one,
        skill_two,
        skill_three,
        skill_four
    } = moduleData;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <section 
            className={`hero__module ${activateAnimations ? 'activate-animations__mount' : ''}`} 
            ref={sectionRef}          
        >
            <div className="hero-image">
                <GatsbyImage
                    className="hero-mobile hero-image-gatbsy"
                    alt={hero_image.alt}
                    fluid={hero_image.mobile_src.childImageSharp.fluid}
                />
                <GatsbyImage
                    className="hero-tablet hero-image-gatbsy"
                    alt={hero_image.alt}
                    fluid={hero_image.tablet_src.childImageSharp.fluid}
                />
                <GatsbyImage
                    className="hero-desktop hero-image-gatbsy"
                    alt={hero_image.alt}
                    fluid={hero_image.desktop_src.childImageSharp.fluid}
                />
            </div>

            <div className="container">
                <div className="text-cta" 
                    
                >
                    <span 
                        style={{ transitionDelay: `250ms` }}
                        className="title fade-up__mount" 
                    >{title}</span>

                    <h1 
                        style={{ transitionDelay: `350ms` }} 
                        className="sub-title fade-up__mount cta-sizing"
                    >{sub_title}</h1>

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
                                {skill_one}
                            </div>
                        </div>
                        <div 
                            style={{ transitionDelay: `550ms` }} 
                            className="row-two fade-up__mount"
                        >
                            <div 
                                style={{ transitionDelay: `750ms` }} 
                                className="skill larger-mobile fade-up__mount"
                            >{skill_two}</div>
                            <div 
                                style={{ transitionDelay: `850ms` }} 
                                className="skill fade-up__mount"
                            >{skill_three}</div>
                            <div  
                                style={{ transitionDelay: `950ms` }} 
                                className="skill fade-up__mount"
                            >{skill_four}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Hero;
