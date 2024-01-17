import { FC, MutableRefObject, ReactComponentElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ReactComponent as IconLogo } from '../../assets/svg/banner/LogoLine.svg'
import * as S from './logoLine.styles'
import gsap from 'gsap'
import { devices } from '../../devices'

const LogoLine: FC = () => {
    const llw = useRef(null)
    const il = useRef() as MutableRefObject<SVGSVGElement>
    const [gap, setGap] = useState(S.GAP_DESKTOP)

    useEffect(() => {
        window.matchMedia(devices.sm).addEventListener('change', (e) => {
            setGap(e.matches ? S.GAP_MOBILE : S.GAP_DESKTOP)
        })
    }, [])

    useLayoutEffect(() => {
        gsap.fromTo(
            llw.current,
            { x: 0 },
            { x: -(il.current.clientWidth + gap) + 'px', duration: 5, repeat: -1, ease: 'none' },
        )
    }, [])
    const logos: ReactComponentElement<any>[] = []
    const COUNT_LOGOS: number = 13
    for (let i = 0; i < COUNT_LOGOS; i++) {
        logos.push(<IconLogo key={i} />)
    }
    return (
        <>
            <S.LogoLineWrapper>
                <div ref={llw}>
                    <IconLogo ref={il} key={COUNT_LOGOS + 1} />
                    {logos}
                </div>
            </S.LogoLineWrapper>
        </>
    )
}

export default LogoLine