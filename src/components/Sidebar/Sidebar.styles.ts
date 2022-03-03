import { createStyles } from '@mantine/core'
import { HEADER_HEIGHT } from '../Header/Header.styles'
export const NAVBAR_WIDTH = 100
const useStyles = createStyles(theme => ({
    sidebar: {
        height: '100vh',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
        position: 'fixed',
        zIndex: 5,
        top: 0,
        bottom: 0,
        left: 0,
        width: NAVBAR_WIDTH,
        paddingTop: HEADER_HEIGHT
    }
}))

export default useStyles
