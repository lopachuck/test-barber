import { useEffect, useState } from 'react'
import i18n from '../../i18n'

export function useLangSelect(lang = 'ENG') {
    const [langSelect, setLang] = useState<string>(lang)
    useEffect(() => {
        i18n.changeLanguage(langSelect.toLowerCase())
    }, [langSelect])

    useEffect(() => {
        setLang(i18n.language.toUpperCase())
    }, [i18n.language])

    return [langSelect, setLang] as const
}