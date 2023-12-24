export const breakpoints = {
    xs: '360px',
    sm: '768px',
    md: '1150px',
    // md: '865px',
    lg: '1280px',
    xl: '1440px',
    // xxl: '1536px',
}

export const devices = {
    xs: `(max-width: ${breakpoints.xs}) or ((orientation: landscape) and (max-height: ${breakpoints.xs}))`,
    sm: `(max-width: ${breakpoints.sm}) or ((orientation: landscape) and (max-height: ${breakpoints.sm}))`,
    md: `(max-width: ${breakpoints.md}) or ((orientation: landscape)and (max-height: ${breakpoints.sm}))`,
    lg: `(max-width: ${breakpoints.lg}) `,
    xl: `(max-width: ${breakpoints.xl})`,
    // xxl: `(max-width: ${breakpoints.xxl})`,
}
