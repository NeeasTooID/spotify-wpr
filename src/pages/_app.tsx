import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, ColorModeScript, extendTheme, ThemeComponentProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    },
    styles: {
        global: (props: ThemeComponentProps) => {
            console.log(props)
            return {
                body: {
                    bg: mode('white', 'spotify.900')(props),
                    color: mode('gray.800', 'whiteAlpha.900')(props)
                }
            }
        }
    },
    colors: {
        spotify: {
            900: '#0d0c0f',
            700: '#131313',
            600: '#1c1b1c'
        }
    }
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode="dark" />
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    )
}

export default MyApp
