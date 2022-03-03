import { createStyles } from '@mantine/core'

export const HEADER_HEIGHT = 60
export const HEADER_BREAKPOINT = 860

export default createStyles(theme => ({
    header: {
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_HEIGHT,
        zIndex: 6,
        position: 'fixed',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
    }
}))
