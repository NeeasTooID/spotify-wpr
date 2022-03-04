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
        paddingTop: HEADER_HEIGHT,
        paddingLeft: theme.spacing.sm,
        paddingRight: theme.spacing.sm
    },
    home: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E2E2E',
        borderRadius: '6px',
        padding: theme.spacing.sm,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#464646'
        }
    },
    navItem: {
        borderRadius: '6px',
        cursor: 'pointer'
    }
}))

export default useStyles
