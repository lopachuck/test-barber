import { DefaultTheme } from 'styled-components'
import { ITheme, ThemeEnum } from './interfaces/styled'

export const baseTheme: ITheme = {
    colors: {
        white: '#FFF',
        accentColor: '#FFC32A',
        background: '#252429',
        backgroundHeader: 'rgba(37, 36, 41)',
        backgroundHeaderOpacity: 'rgba(37, 36, 41, 0.50)',
        textSecondary: '#ABABAB',
        elementsGrey: '#6B6B6B',
        backgroundElemetsBlack: '#1D1D22',
        backgroundWaze: '#61dafb',
    },

}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
    },
}
