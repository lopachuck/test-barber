import { ukr } from './lang/ukr';
import {en} from './lang/en';


export interface ITranslations  {
  [key: string]: string | null
}

export const t = (key: string) => {
  
  const translations = { en,uk: ukr }

  //const lang = Store.get( 'lang' ) || 'en'
  const lang = 'en'
  
  let translation: string = translations[ lang ][ key ] || translations[ 'en' ][ key ] || key || ''

   return translation
}
