import React, { FC } from 'react'
import { useLangSelect } from '../../hooks/LangSelect/LangSelect'
import i18n from '../../i18n'

type ILangMobileOptionProps = {
    lang: string
}
const LangMobileOption: FC<ILangMobileOptionProps> = ({ lang }) => {
    const [currentLang, setCurrentLang] = useLangSelect(i18n.language.toUpperCase())
    return (
        <>
            <div className={currentLang === lang ? 'selected' : ''}
                 onClick={() => setCurrentLang(lang)}>{lang}
            </div>
        </>
    )
}
export default LangMobileOption