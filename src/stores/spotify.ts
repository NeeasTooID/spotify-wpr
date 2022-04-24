import produce from 'immer'
import create from 'zustand'

interface SpotifyState {
    initalized: boolean
    userPlaylists: SpotifyApi.PlaylistObjectSimplified[]
    user: SpotifyApi.CurrentUsersProfileResponse | null
    initalize: (
        items: SpotifyApi.PlaylistObjectSimplified[],
        user: SpotifyApi.CurrentUsersProfileResponse
    ) => void
}

export const zSpotifyStore = create<SpotifyState>(set => ({
    initalized: false,
    userPlaylists: [],
    user: null,
    initalize: (items, user) =>
        set(
            produce((state: SpotifyState) => {
                state.userPlaylists = items
                state.user = user
                state.initalized = true
            })
        )
}))
