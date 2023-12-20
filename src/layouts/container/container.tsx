import { StyledContainer } from './container.styles'
import { FC } from 'react'

type Props = {
    children?: React.ReactNode
}

const Container: FC<Props> = ({ children }): React.ReactElement => {
    // const { isMenuOpen } = useSelector((state: any) => state.menu)
    return (
        <>
            <StyledContainer >{children}</StyledContainer>
        </>
    )
}

export default Container
