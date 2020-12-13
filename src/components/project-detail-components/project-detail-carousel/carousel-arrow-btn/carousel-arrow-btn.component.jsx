import React from 'react'
import './carousel-arrow-btn.styles.scss'

export default function CarouselArrowBtn({ direction = 'right', ...otherProps }) {
    return (
        <button 
            aria-label="a button that shows the next image in the carousel" 
            // on:click={() => viewNextSlide()} 
            class={`carousel-arrow-btn__module ${direction}`}
            {...otherProps}
        >
        <span class="arrow"></span>
    </button>
    )
}
