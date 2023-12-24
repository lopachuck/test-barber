export const breakpoints = {
    // xs: '428px',
    sm: '360px',
    md: '768px',
    // md: '865px',
    lg: '1024px',
    xl: '1280px',
    // xxl: '1536px',
}

export const devices = {
    // xs: `(max-width: ${breakpoints.xs}) or ((orientation: landscape) and (max-height: ${breakpoints.xs}))`,
    sm: `(max-width: ${breakpoints.sm}) or ((orientation: landscape) and (max-height: ${breakpoints.sm}))`,
    md: `(max-width: ${breakpoints.md}) or ((orientation: landscape)and (max-height: ${breakpoints.sm}))`,
    lg: `(max-width: ${breakpoints.lg}) `,
    xl: `(max-width: ${breakpoints.xl})`,
    // xxl: `(max-width: ${breakpoints.xxl})`,
}
