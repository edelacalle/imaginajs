import languageDetector from 'next-language-detector'

export default languageDetector({
  supportedLngs: ['es','en'],
  fallbackLng: 'es'
})