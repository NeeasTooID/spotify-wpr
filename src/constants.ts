import { URLSearchParams } from 'url'

export const scopes = [
    'user-read-playback-position',
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
    // 'playlist-read-public',
    'playlist-read-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'playlist-read-collaborative',
    'ugc-image-upload',
    'user-follow-read',
    'user-follow-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played'
]
const queryParamString = new URLSearchParams({ scope: scopes.join(',') })

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`
