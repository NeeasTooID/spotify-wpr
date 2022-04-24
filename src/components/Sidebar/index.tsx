import { Box } from '@chakra-ui/react'

interface Props {}

const Sidebar: React.FC<Props> = () => {
    return (
        <Box as="aside" bg="spotify.700" w={60} h="100vh">
            <Box as="nav"></Box>
        </Box>
    )
}
export default Sidebar
