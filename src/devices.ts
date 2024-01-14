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
}
