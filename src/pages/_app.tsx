import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
                <Component {...pageProps} />
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default MyApp
