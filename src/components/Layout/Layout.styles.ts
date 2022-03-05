import { createStyles } from '@mantine/core'
import { HEADER_HEIGHT } from '../Header/Header.styles'
import { NAVBAR_WIDTH } from '../Sidebar/Sidebar.styles'
const useStyles = createStyles(theme => ({
    main: {
        paddingLeft: NAVBAR_WIDTH,
        paddingTop: HEADER_HEIGHT,
        zIndex: '1',
        '&::before': {
            content: `''`,
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '35%',
            background: 'linear-gradient(to bottom, rgb(50 131 16) -26%, rgba(0, 0, 0, 0))',
            filter: 'blur(1px)',
            zIndex: '-1'
        }
    }
}))

export default useStyles
