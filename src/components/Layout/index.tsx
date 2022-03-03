import { Text } from '@mantine/core'
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import useStyles from './Layout.styles'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    const { classes } = useStyles()
    return (
        <>
            <Header />
            <Sidebar />
            <main className={classes.main}>{children}</main>
        </>
    )
}

export default Layout
