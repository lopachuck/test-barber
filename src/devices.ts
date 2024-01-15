export const breakpoints = {
    xs: '460px',
    sm: '650px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
    fhd: '1930px',
    k3_5: '3460px', // mas 16 inc
    k4: '3820px', // 4k windows
}

export const devices = {
    xs: `(max-width: ${breakpoints.xs})`,
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    fhd: `(max-width: ${breakpoints.fhd})`,
    lg: `(max-width: ${breakpoints.lg})`,
    xl: `(max-width: ${breakpoints.xl})`,
    ipad7th: `only screen and (min-device-width: 810px) and (max-device-width: 1080px) and (-webkit-min-device-pixel-ratio: 2) `,
    ipad: `only screen and (min-device-width: 768px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2)`,
    redminote7: `only screen and (min-device-width: 393px) and (max-device-width: 851px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2.75)`,
    redminote7Landscape: `only screen and (min-device-width: 393px) and (max-device-width: 851px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2.75)`,
    redmi12proPlus5g: `only screen and (min-device-width: 360px) and (max-device-width: 800px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3)`,
    redmi12proPlus5gLandscape: `screen and (min-device-width: 360px) and (max-device-width: 873px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2.75)`,
    iphoneSELandscape: `screen and (min-device-width: 375px) and (max-device-width: 1070px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)`,
    iphone12: `screen and (min-device-width: 390px) and (max-device-width: 844px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3)`,
    iphone11ProMax: `screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3)`,
}
