import { Session } from 'inspector'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { spotifyApi } from '../spotify'

export type BetterSession = Session & { acessToken: string; refreshToken: string }

export const useSpotify = () => {
    const { data, status } = <
        {
            data: (Session & { accessToken: string; refreshToken: string }) | null
            status: 'authenticated' | 'loading'
        }
    >useSession<true>()
    if (!spotifyApi.getAccessToken() || !spotifyApi.getRefreshToken()) {
        if (data) {
            spotifyApi.setAccessToken(data!.accessToken)
            spotifyApi.setRefreshToken(data!.refreshToken)
        }
    }

    return { spotifyApi, status }
}
