import React from 'react'
import './carousel-arrow-btn.styles.scss'

export default function CarouselArrowBtn({ direction = 'right', hoverText = '', ...otherProps }) {
    return (
        <button 
            aria-label="a button that shows the next image in the carousel" 
            // on:click={() => viewNextSlide()} 
            className={`carousel-arrow-btn__module ${direction}`}
            {...otherProps}
        >
        {hoverText && 
            <span className="hover-text">{hoverText}</span>
        }
        <span className="arrow"></span>
    </button>
    )
}
