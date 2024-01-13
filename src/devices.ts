export const breakpoints = {
    xs: '460px',
    sm: '650px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
}

export const devices = {
    xs: `(max-width: ${breakpoints.xs}) or ((orientation: landscape) and (max-height: ${breakpoints.xs}))`,
    sm: `(max-width: ${breakpoints.sm}) or ((orientation: landscape) and (max-height: ${breakpoints.sm}))`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
    xl: `(max-width: ${breakpoints.xl})`,
}
