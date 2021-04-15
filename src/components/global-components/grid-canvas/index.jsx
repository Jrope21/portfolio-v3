import React, { useEffect, useRef } from 'react'

// TODO -
// => create intro animation
// => Have boxes move / animate based on cursor position
export default function GridCanvas({ ...otherProps }) {

    const canvasRef = useRef(null);

    const draw = ctx => {
        ctx.canvas.width = 250;
        ctx.canvas.height = 190;
        drawGrid(ctx);
    }

    const drawGrid = ctx => {
        ctx.fillStyle = 'rgba(244, 175, 63, 0.7)';

        const rows = 10;
        const rowGap = 20;

        const columns = 14;
        const columnGap = 18;
       
        const gridBoxWidth = 3;

        for(let row = 0; row < rows; row++) {
            let rowYAxis = row * rowGap;
            for(let col = 0; col < columns; col++) {
                const colXAxis = col * columnGap;
                ctx.fillRect(colXAxis, rowYAxis, gridBoxWidth, gridBoxWidth);       
            }
            
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        draw(context);
    }, [draw])
    
    return <canvas ref={canvasRef} {...otherProps} />
}
