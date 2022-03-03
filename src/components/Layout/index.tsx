import { Text } from '@mantine/core'
import React from 'react'
import Sidebar from '../Sidebar'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main>{children}</main>
        </>
    )
}

export default Layout
