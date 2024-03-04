import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

export const getI18N = (
  { currentLocale }: { currentLocale: string | undefined } 
) => {
  switch (currentLocale) {
    case LANGUAGES.ENGLISH: return english
    case LANGUAGES.SPANISH: return spanish
    default: return spanish
  }
}