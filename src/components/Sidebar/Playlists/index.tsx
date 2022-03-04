import { Box, Image } from '@mantine/core'
import React from 'react'
import { zSpotifyStore } from '../../../stores/spotify'
import useStyles from './Playlists.styles'

interface Props {}

const SidebarPlaylists: React.FC<Props> = props => {
    const store = zSpotifyStore()
    const { classes } = useStyles()
    if (!store.initalized) return <div>LOADING</div>
    return (
        <>
            <Box className={classes.wrapper}>
                {store.userPlaylists.map(playlist => (
                    <Box className={classes.playlist}>
                        <Image
                            key={playlist.id}
                            src={playlist.images?.length ? playlist.images[0].url : undefined}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default SidebarPlaylists
