import { createStyles } from '@mantine/core'
import { NAVBAR_WIDTH } from '../Sidebar/Sidebar.styles'

export const HEADER_HEIGHT = 80
export const HEADER_BREAKPOINT = 860

export default createStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_HEIGHT,
        zIndex: 6,
        paddingRight: theme.spacing.lg,
        paddingLeft: theme.spacing.lg,
        marginLeft: NAVBAR_WIDTH
    },
    userPill: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: theme.radius.xl,
        padding: '.1em',
        cursor: 'pointer'
    },
    image: {
        borderRadius: '50%',
        overflow: 'hidden',
        height: '32px',
        width: '32px'
    }
}))
