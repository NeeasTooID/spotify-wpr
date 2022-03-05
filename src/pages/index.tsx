import { Center, Text } from '@mantine/core'
import type { GetServerSideProps, NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { spotifyApi } from '../spotify'
import { zSpotifyStore } from '../stores/spotify'

interface HomeProps {
    playlists: SpotifyApi.PlaylistObjectSimplified[]
    user: SpotifyApi.CurrentUsersProfileResponse
}
const Home: NextPage<HomeProps> = ({ playlists, user }) => {
    const { data } = useSession()
    const store = zSpotifyStore()
    useEffect(() => {
        store.initalize(playlists, user)
    }, [])
    console.log(store, data)
    return (
        <Layout>
            <Text>Hi</Text>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        if (!spotifyApi.getAccessToken()) {
            const token = await getToken({
                req: context.req,
                secret: process.env.JWT_SECRET
            })
            console.log('TOKEN: ', token)
            spotifyApi.setAccessToken(token!.accessToken as string)
            spotifyApi.setRefreshToken(token!.refreshToken as string)
        }
        const {
            body: { items }
        } = await spotifyApi.getUserPlaylists()
        const { body: me } = await spotifyApi.getMe()
        return {
            props: { playlists: items, user: me }
        }
    } catch (err) {
        console.error(err)
        return { props: { playlists: [], user: {} } }
    }
}

export default Home
