import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { theme } from '../theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  // styled-conponents로 테마를 사용하기 위해 ThemeProvider를 둔다
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
