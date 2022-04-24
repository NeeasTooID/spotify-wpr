import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ArchiveTray, House } from 'phosphor-react'

const SideItem: React.FC<{ icon: any; name: string; path: string }> = ({ icon, name, path }) => {
    const router = useRouter()
    const selected = router.pathname === path
    console.log(selected, router)
    const bg = selected ? { bg: 'white', color: 'spotify.900' } : { bg: 'transparent', color: 'white' }
    const hover = selected ? { bg: 'transparent', color: 'white' } : { bg: 'white', color: 'spotify.900' }
    return (
        <Flex
            as="li"
            gap={2}
            p={3}
            alignItems="center"
            cursor="pointer"
            borderRadius={5}
            transition="300ms all ease"
            {...bg}
            _hover={hover}
            onClick={() => router.push(path)}
        >
            {icon}
            <Text fontSize="md">{name}</Text>
        </Flex>
    )
}

interface Props {}

const Sidebar: React.FC<Props> = () => {
    return (
        <Box as="aside" bg="spotify.700" w={80} h="100vh" p={3} userSelect="none">
            <Box mt={4} mb={8}>
                <Image src="https://media.discordapp.net/attachments/770534108832858132/967671469612081182/better.png" />
            </Box>
            <Box as="nav">
                <Flex as="ul" direction="column" gap={3}>
                    <SideItem icon={<House weight="fill" size={28} />} name="Home" path="/" />
                    <SideItem
                        icon={<ArchiveTray weight="fill" size={28} />}
                        name="Playlists"
                        path="/playlist"
                    />
                </Flex>
            </Box>
        </Box>
    )
}
export default Sidebar
