export const optimalBarWidth = (barSpacing, pixelRatio) => {
    return Math.floor(barSpacing * 0.3 * pixelRatio);

};

export function optimalCandlestickWidth(barSpacing, pixelRatio, numberOfVisibleBars) {
    const barSpacingSpecialCaseFrom = 2.5;
    const barSpacingSpecialCaseTo = 4;
    const barSpacingSpecialCaseCoeff = 3;

    if (barSpacing >= barSpacingSpecialCaseFrom && barSpacing <= barSpacingSpecialCaseTo) {
        return Math.floor(barSpacingSpecialCaseCoeff * pixelRatio);
    }

    const barSpacingReducingCoeff = 0.2;
    const coeff = 1 - barSpacingReducingCoeff * Math.atan(Math.max(barSpacingSpecialCaseTo, barSpacing) - barSpacingSpecialCaseTo) / (Math.PI * 0.5);
    const res = Math.floor(barSpacing * coeff * pixelRatio);
    const scaledBarSpacing = Math.floor(barSpacing * pixelRatio);
    const optimal = Math.min(res, scaledBarSpacing);

    // Now, let's add some logic to adjust the width based on the number of visible bars.
    // This is just a simple example; you can adjust the formula as you see fit.
    const zoomFactor = Math.max(1, 1000 / numberOfVisibleBars);

    // Adjust the resulting width based on the zoom level
    const adjustedWidth = Math.floor(optimal * zoomFactor);

    // Define some sensible max/min widths
    const maxCandleWidth = 50;  // Set a maximum limit for the candle width
    const minCandleWidth = 1;   // Set a minimum limit for the candle width

    // You might want to set some sensible max/min widths here
    return Math.min(Math.max(adjustedWidth, minCandleWidth), maxCandleWidth);
}
