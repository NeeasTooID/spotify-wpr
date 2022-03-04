import { Box, Center, Divider, ScrollArea, Text } from '@mantine/core'
import { GetServerSideProps } from 'next'
import { House } from 'phosphor-react'
import React from 'react'
import { useSpotify } from '../../hooks/useSpotify'
import { spotifyApi } from '../../spotify'
import SidebarPlaylists from './Playlists'
import useStyles from './Sidebar.styles'

interface Props {}

const Sidebar: React.FC<Props> = ({}) => {
    const { classes } = useStyles()
    return (
        <>
            <nav className={classes.sidebar}>
                <ScrollArea style={{ height: '100vh' }} type="scroll">
                    <Box className={classes.home}>
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
