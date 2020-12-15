import React from 'react'
import './text-displacement.styles.scss'

export default function TextDisplacement({ 
    text, 
    containerClassName = '', 
    textClassName = '',
    ...otherProps 
}) {
    return (
        <div 
            className={`text-displacement__module ${containerClassName}`}
            {...otherProps}
        >
            <span 
                className={`inner-text-container ${textClassName}`}
                dangerouslySetInnerHTML={{ __html: text }}
            />           
        </div>
    )
}
