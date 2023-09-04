// Fills the inner border of a rectangle on the canvas
export  function fillRectInnerBorder(ctx, x, y, width, height, borderWidth) {
    // Draw horizontal (top and bottom) edges
    ctx.fillRect(x + borderWidth, y, width - borderWidth * 2, borderWidth);
    ctx.fillRect(x + borderWidth, y + height - borderWidth, width - borderWidth * 2, borderWidth);

    // Draw vertical (left and right) edges
    ctx.fillRect(x, y, borderWidth, height);
    ctx.fillRect(x + width - borderWidth, y, borderWidth, height);
}

// Draws a rounded rectangle on the canvas
export  function drawRoundRect(ctx, x, y, w, h, radii) {
    ctx.beginPath();
    ctx.moveTo(x + radii, y);
    ctx.lineTo(x + w - radii, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radii);
    ctx.lineTo(x + w, y + h - radii);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radii, y + h);
    ctx.lineTo(x + radii, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radii);
    ctx.lineTo(x, y + radii);
    ctx.quadraticCurveTo(x, y, x + radii, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// Draws a rounded rectangle with an inner border on the canvas
export function drawRoundRectWithInnerBorder(ctx, left, top, width, height, backgroundColor, borderWidth = 0, borderRadius = 0, borderColor = '') {
    ctx.save();
    
    // Draw the background
    ctx.fillStyle = backgroundColor;
    drawRoundRect(ctx, left, top, width, height, borderRadius);
    
    // Draw the inner border
    if (borderWidth > 0 && borderColor) {
        ctx.fillStyle = borderColor;
        fillRectInnerBorder(ctx, left, top, width, height, borderWidth);
    }
    
    ctx.restore();
}

// Clears a rectangle area on the canvas
export  function clearRect(ctx, x, y, w, h, clearColor) {
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.fillStyle = clearColor;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
}
