import SpotifyWebApi from 'spotify-web-api-node'

export const spotifyApi = new SpotifyWebApi({
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID!
})
