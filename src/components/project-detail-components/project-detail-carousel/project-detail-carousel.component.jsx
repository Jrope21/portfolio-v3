import React, { useState } from 'react'
import './project-detail-carousel.styles.scss'

import CarouselArrowBtn from './carousel-arrow-btn/carousel-arrow-btn.component';

export default function ProjectDetailCarousel({ images }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const viewNextSlide = () => setActiveIndex(
        activeIndex + 1 > images.length - 1 ? 0 : activeIndex + 1
    )

    const viewPrevSlide = () => setActiveIndex(
        activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1
    )

    if (images) return (
        <section data-sal="mount" className="project-detail-carousel__module">
            <span className="design-element-line"></span>
            <div className="project-detail-carousel-inner-container">
                <div className="fade-up__mount">
                    {images.map(({ src, alt }, i) => (
                        <div className={` fade-up__mount carousel-image-container ${i === activeIndex ? 'active' : ''}`}>
                            <CarouselArrowBtn 
                                direction="left"
                                onClick={viewPrevSlide}
                            />
                            <img 
                                src={src} 
                                alt={alt} 
                                key={'project-detail-carousel' + alt + i} 
                            />
                            <CarouselArrowBtn 
                                direction="right"
                                onClick={viewNextSlide}
                            />
                        </div> 
                    ))}
                </div>
                <ol 
                    className="carousel-controls-container "
                    
                >
                    {images.map(({ alt },  i) => (
                        <li 
                            className={`carousel-control-button-container fade-up__mount`}
                            key={'project-detail-carousel-controls' + alt + i}
                            onClick={() => setActiveIndex(i)}
                            style={{ transitionDelay: `${100 + i * 50}ms` }}
                        >
                            <button className={`carousel-control-button ${i === activeIndex ? 'active' : ''}`}>
                                <span className="sr-only">
                                    Click to view the image corresponding with this position: {i + 1}
                                </span>
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
    return null;
}
