import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
import SpotifyProvider from 'next-auth/providers/spotify'
import { LOGIN_URL } from '../../../constants'
import { spotifyApi } from '../../../spotify'

const refreshAcessToken = async (token: JWT) => {
    try {
        console.log('REFRESHING TOKEN', token)
        spotifyApi.setAccessToken(token.accessToken as string)
        spotifyApi.setRefreshToken(token.refreshToken as string)
        const { body: data } = await spotifyApi.refreshAccessToken()
        console.log('REFRESHED TOKEN IS', data)
        return {
            ...token,
            accessToken: data.access_token,
            accessTokenExpires: Date.now() + data.expires_in * 1000,
            refreshToken: data.refresh_token || token.refreshToken
        }
    } catch (err) {
        console.error(err)
        return {
            ...token,
            error: 'bruv'
        }
    }
}

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
            authorization: LOGIN_URL
        })
    ],
    secret: process.env.JWT_SECRET!,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user, account }) {
            console.log('IN JWT CALLBAKC', token, user, account)
            if (account && user) {
                return {
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    accessTokenExpires: account.expires_at! * 1000,
                    user,
                    username: account.providerAccountId
                }
            }
            if (Date.now() < (token.accessTokenExpires as number)) {
                console.log('OK TOKEN IS STILL VALID')
                return token
            }
            console.log('TOKEN HAS EXIRED')
            return refreshAcessToken(token)
        },
        async session({ session, user, token }) {
            console.log('IN SESSION CALLBACK', session, user, token)
            session.accessToken = token.accessToken
            session.refreshToken = token.refreshToken
            session.user = token.user as any
            return session
        }
    }
})
