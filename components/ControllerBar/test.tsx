import React from 'react';

function hexToHSL(hex: string): string {
    // Remove the '#' character if present
    const cleanedHex = hex.replace('#', '');

    // Convert the cleaned hex value to RGB
    const red = parseInt(cleanedHex.substr(0, 2), 16) / 255;
    const green = parseInt(cleanedHex.substr(2, 2), 16) / 255;
    const blue = parseInt(cleanedHex.substr(4, 2), 16) / 255;

    // Find the maximum and minimum values of RGB
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);

    // Calculate the hue
    let hue = 0;
    if (max === min) {
        hue = 0;
    } else if (max === red) {
        hue = ((green - blue) / (max - min)) % 6;
    } else if (max === green) {
        hue = (blue - red) / (max - min) + 2;
    } else {
        hue = (red - green) / (max - min) + 4;
    }
    hue = Math.round(hue * 60);

    // Calculate the lightness
    const lightness = (max + min) / 2;

    // Calculate the saturation
    let saturation = 0;
    if (max !== min) {
        saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }
    saturation = Math.round(saturation * 100);

    // Return the HSL value as a string
    return `hsl(${hue}, ${saturation}%, ${Math.round(lightness * 100)}%)`;
}

// Example usage
const HexToHSLExample: React.FC = () => {
    const hexColor = '#FF0000';
    const hslimport React from 'react';

    function hexToHSL(hex: string): string {
        // Remove the '#' character if present
        const cleanedHex = hex.replace('#', '');

        // Convert the cleaned hex value to RGB
        const red = parseInt(cleanedHex.substr(0, 2), 16) / 255;
        const green = parseInt(cleanedHex.substr(2, 2), 16) / 255;
        const blue = parseInt(cleanedHex.substr(4, 2), 16) / 255;

        // Find the maximum and minimum values of RGB
        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);

        // Calculate the hue
        let hue = 0;
        if (max === min) {
            hue = 0;
        } else if (max === red) {
            hue = ((green - blue) / (max - min)) % 6;
        } else if (max === green) {
            hue = (blue - red) / (max - min) + 2;
        } else {
            hue = (red - green) / (max - min) + 4;
        }
        hue = Math.round(hue * 60);

        // Calculate the lightness
        const lightness = (max + min) / 2;

        // Calculate the saturation
        let saturation = 0;
        if (max !== min) {
            saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
        }
        saturation = Math.round(saturation * 100);

        // Return the HSL value as a string
        return `hsl(${hue}, ${saturation}%, ${Math.round(lightness * 100)}%)`;
    }

    // Example usage
    const HexToHSLExample: React.FC = () => {
        const hexColor = '#FF0000';
        const hslColor = hexToHSL(hexColor);

        return (
            <div>
                <div style={{ backgroundColor: hexColor, width: '100px', height: '100px' }}></div>
                <div>{hslColor}</div>
            </div>
        );
    };

    export default HexToHSLExample;