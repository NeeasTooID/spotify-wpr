import { createStyles } from '@mantine/core'
import { HEADER_HEIGHT } from '../Header/Header.styles'
import { NAVBAR_WIDTH } from '../Sidebar/Sidebar.styles'
const useStyles = createStyles(theme => ({
    main: {
        paddingLeft: NAVBAR_WIDTH,
        paddingTop: HEADER_HEIGHT
    }
}))

export default useStyles
