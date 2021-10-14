import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import '../styles/font.css'
import ScrollToTopBtn from '../components/shared/ScrollToTopBtn'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTopBtn />
    </>
  )
}

export default MyApp
