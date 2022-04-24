import { Flex } from '@chakra-ui/react'
import Sidebar from '../Sidebar'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Flex>
                <Sidebar />
                {children}
            </Flex>
        </>
    )
}
export default Layout
