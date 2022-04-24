import { Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { zSpotifyStore } from '../../stores/spotify'

type Props = {}

const PlaylistPage: NextPage<Props> = ({}) => {
    const router = useRouter()
    const store = zSpotifyStore()
    const playlist = store.userPlaylists.find(s => s.id === router.query.id)
    if (!playlist) return <div>idk wot that playlist is eh</div>
    return (
        <>
            <Text>{playlist.name}</Text>
        </>
    )
}

export default PlaylistPage
