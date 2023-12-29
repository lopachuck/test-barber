import { uk } from './lang/uk';
import {en} from './lang/en';


export interface ITranslations  {
  [key: string]: string | null
}

export const t = (key: string) => {
  
  const translations = { en,uk }
  const lang = 'en'
  
  let translation: string = translations[ lang ][ key ] || translations[ 'en' ][ key ] || key || ''

   return translation
}
