import produce from 'immer'
import create from 'zustand'

interface SpotifyState {
    userPlaylists: SpotifyApi.PlaylistObjectSimplified[]
    initalized: boolean
    initalize: (items: SpotifyApi.PlaylistObjectSimplified[]) => void
}

export const zSpotifyStore = create<SpotifyState>(set => ({
    userPlaylists: [],
    initalized: false,
    initalize: items =>
        set(
            produce((state: SpotifyState) => {
                state.userPlaylists = items
                state.initalized = true
            })
        )
}))
