import { ScrollArea } from '@mantine/core'
import React from 'react'
import useStyles from './Sidebar.styles'

interface Props {}

const Sidebar: React.FC<Props> = props => {
    const { cx, classes } = useStyles()
    return (
        <>
            <nav className={cx(classes.sidebar)}>
                <ScrollArea style={{ height: '100vh' }} type="scroll"></ScrollArea>
            </nav>
        </>
    )
}

export default Sidebar
