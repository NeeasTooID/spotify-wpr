import { createStyles } from '@mantine/core'
const useStyles = createStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md
    },
    playlist: {
        borderRadius: theme.radius.md,
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
            filter: 'brightness(80%)'
        }
    }
}))

export default useStyles
