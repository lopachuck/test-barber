import {FC, MutableRefObject, useEffect, useLayoutEffect, useRef, useState} from "react";
import {ReactComponent as IconLogo} from "../../assets/svg/banner/LogoLine.svg";
import * as S from './logoLine.styles'
import gsap from 'gsap'
import {devices} from "../../devices";

const LogoLine: FC = () => {
    const llw = useRef(null)
    const il = useRef() as MutableRefObject<SVGSVGElement>
    const [gap, setGap] = useState(S.GAP_DESKTOP)
    
    useEffect(() => {
        window.matchMedia(devices.sm).addEventListener( "change", (e) => {
            if (e.matches) {
                setGap(S.GAP_MOBILE)
            } else {
                setGap(S.GAP_DESKTOP)
            }
        })
    }, []);
    
    useLayoutEffect(() => {
        gsap.fromTo(
            llw.current,
        {x: 0},
        {x: -(il.current.clientWidth + gap)  + "px", duration: 5, repeat: -1, ease: "none" }
        )
    }, []);
    return (
        <>
            <S.LogoLineWrapper>
                <div  ref={llw}>
                    <IconLogo ref={il}/>
                    <IconLogo/>
                    <IconLogo/>
                    <IconLogo/>
                    <IconLogo/>
                    <IconLogo/>
                    <IconLogo/>
                    <IconLogo/>
                </div>
                
            </S.LogoLineWrapper>
        </>
    )
}

export default LogoLine;