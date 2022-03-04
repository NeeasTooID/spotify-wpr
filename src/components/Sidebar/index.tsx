import { Box, Divider, ScrollArea, Text } from '@mantine/core'
import { useRouter } from 'next/router'
import { House } from 'phosphor-react'
import React from 'react'
import SidebarPlaylists from './Playlists'
import useStyles from './Sidebar.styles'

interface Props {}

const Sidebar: React.FC<Props> = ({}) => {
    const { classes } = useStyles()
    const router = useRouter()
    return (
        <>
            <nav className={classes.sidebar}>
                <ScrollArea style={{ height: '100vh' }} type="scroll">
                    <Box
                        onClick={() => (router.pathname !== '/' ? router.push('/') : null)}
                        className={classes.home}
                    >
                        <House size={32} />
                        <Text>Home</Text>
                    </Box>
                    <Divider my={10} />
                    <SidebarPlaylists />
                </ScrollArea>
            </nav>
        </>
    )
}

export default Sidebar
