export const breakpoints = {
    xs: '460px',
    sm: '650px',
    md: '1150px',
    // md: '865px',
    lg: '1280px',
    xl: '1440px',
    // xxl: '1536px',
}

export const devices = {
    // xs: `(max-width: ${breakpoints.xs}) or ((orientation: landscape) and (max-height: ${breakpoints.xs}))`,
    xs: `(max-width: ${breakpoints.xs})`,
    sm: `(max-width: ${breakpoints.sm})`,
    // sm: `(max-width: ${breakpoints.sm}) or ((orientation: landscape) and (max-height: ${breakpoints.sm}))`,
    // md: `(max-width: ${breakpoints.md}) or ((orientation: landscape)and (max-height: ${breakpoints.md}))`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg}) `,
    xl: `(max-width: ${breakpoints.xl})`,
    // xxl: `(max-width: ${breakpoints.xxl})`,
}
