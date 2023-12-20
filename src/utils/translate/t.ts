import { uk } from './lang/uk';
import {en} from './lang/en';

/*
import { ar } from '../Translations/lang/ar';
import { bn } from '../Translations/lang/bn';
import { bg } from '../Translations/lang/bg';
import { zh } from '../Translations/lang/zh';
import { cs } from '../Translations/lang/cs';
import { nl } from '../Translations/lang/nl';
import { tl } from '../Translations/lang/tl';
import { fi } from '../Translations/lang/fi';
import { fr } from '../Translations/lang/fr';
import { de } from '../Translations/lang/de';
import { el } from '../Translations/lang/el';
import { iw } from '../Translations/lang/iw';
import { hi } from '../Translations/lang/hi';
import { hu } from '../Translations/lang/hu';
import { id } from '../Translations/lang/id';
import { it } from '../Translations/lang/it';
import { ja } from '../Translations/lang/ja';
import { jw } from '../Translations/lang/jw';
import { ko } from '../Translations/lang/ko';
import { ms } from '../Translations/lang/ms';
import { fa } from '../Translations/lang/fa';
import { pl } from '../Translations/lang/pl';
import { pt } from '../Translations/lang/pt';
import { ro } from '../Translations/lang/ro';
import { ru } from '../Translations/lang/ru';
import { es } from '../Translations/lang/es';
import { th } from '../Translations/lang/th';
import { tr } from '../Translations/lang/tr';
import { vi } from '../Translations/lang/vi';
*/

export interface ITranslations  {
  [key: string]: string | null
}

export const t = (key: string) => {

  //const translations={ bn, zh, cs, en, fr, de, el, hi, hu, id, it, ja, jw, ko, ms, fa, pl, pt, ro, ru, es, th, tr, vi, ar, bg, nl, tl, fi, iw }
  
  const translations = { en,uk }

  //const lang = Store.get( 'lang' ) || 'en'
  const lang = 'en'
  
  let translation: string = translations[ lang ][ key ] || translations[ 'en' ][ key ] || key || ''

  //if ( window.lang( key ).toLowerCase() === key ) return translations[ 'en' ][ key ] || key || ''

  // if ( window.lang( key ).toLowerCase() === key.toLowerCase() ) return translations[ 'en' ][ key ] || key || ''
  // else return window.lang( key ) || translations[ 'en' ][ key ] || key || ''
  return translation
}
