import { Center, Text } from '@mantine/core'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Home: NextPage = props => {
    const { data } = useSession()
    console.log(data)
    return (
        <Center sx={{ height: '100vh' }}>
            <Text>HI app</Text>
        </Center>
    )
}

export default Home
