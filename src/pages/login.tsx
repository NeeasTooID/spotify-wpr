import { Button, Center, Text } from '@mantine/core'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react'
import { SpotifyLogo } from 'phosphor-react'

interface Props {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null
}

const Login: NextPage<Props> = ({ providers }) => {
    return (
        <Center sx={{ height: '100vh' }}>
            {providers &&
                Object.values(providers).map(provider => (
                    <Button
                        key={provider.name}
                        onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                        leftIcon={<SpotifyLogo size={24} />}
                        color="green"
                    >
                        Login with {provider.name} eh
                    </Button>
                ))}
        </Center>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}
export default Login
