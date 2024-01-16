import { FC, useState } from 'react'
import * as S from '../../pages/Barbers/barbers.styles'

type IBarberProp = {
    srcOriginal: string;
    srcWebp: string;
    srcHoverOriginal: string;
    srcHoverWebp: string;
    alt: string;
}
const BarberPhoto: FC<IBarberProp> = ({
                                          srcOriginal,
                                          srcWebp,
                                          srcHoverOriginal,
                                          srcHoverWebp,
                                          alt,
                                      }) => {
    const [hover, setHover] = useState(false)
    return (
        <>
            <div style={{ overflow: 'hidden' }}>
                <S.BarberPhoto
                    onMouseOver={(): void => {
                        setHover(true)
                    }}
                    onMouseOut={(): void => {
                        setHover(false)
                    }}
                >
                    {hover ? (<>
                        <source srcSet={srcHoverWebp + ' 2x'} type={'image/webp'} />
                        <img src={srcHoverWebp}
                             loading={'lazy'} alt={alt}
                        />
                    </>) : (<>
                        <source srcSet={srcWebp + ' 2x'} type={'image/webp'} />
                        <img src={srcOriginal}
                             loading={'lazy'} alt={alt}
                        />
                    </>)}
                </S.BarberPhoto>
            </div>
        </>
    )
}
export default BarberPhoto