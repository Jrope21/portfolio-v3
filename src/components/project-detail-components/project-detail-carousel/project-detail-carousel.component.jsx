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
        <section className="project-detail-carousel__module">
            {images.map(({ src, alt }, i) => (
                <div className={`carousel-image-container ${i === activeIndex ? 'active' : ''}`}>
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
            <ol className="carousel-controls-container">
                {images.map(({ alt },  i) => (
                    <li 
                        className={`carousel-control-button-container`}
                        key={'project-detail-carousel-controls' + alt + i}
                        onClick={() => setActiveIndex(i)}
                    >
                        <button className={`carousel-control-button ${i === activeIndex ? 'active' : ''}`}>
                            <span className="sr-only">
                                Click to view the image corresponding with this position: {i + 1}
                            </span>
                        </button>
                    </li>
                ))}
            </ol>
        </section>
    )
    return null;
}
