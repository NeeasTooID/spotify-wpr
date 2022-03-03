import { Center, Text } from '@mantine/core'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Layout from '../components/Layout'

const Home: NextPage = props => {
    const { data } = useSession()
    console.log(data)
    return (
        <Layout>
            <Text>Hi</Text>
        </Layout>
    )
}

export default Home
