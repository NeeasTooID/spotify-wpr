import { ScrollArea } from '@mantine/core'
import React from 'react'
import useStyles from './Header.styles'

interface Props {}

const Header: React.FC<Props> = props => {
    const { cx, classes } = useStyles()
    return (
        <>
            <header className={classes.header}>hi</header>
        </>
    )
}

export default Header
