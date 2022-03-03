import { createStyles } from '@mantine/core'
export const NAVBAR_WIDTH = 260
export const NAVBAR_BREAKPOINT = 760
const useStyles = createStyles(theme => ({
    sidebar: {
        height: '100vh',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        position: 'fixed',
        zIndex: 5,
        top: 0,
        bottom: 0,
        left: 0,
        width: NAVBAR_WIDTH
    }
}))

export default useStyles
