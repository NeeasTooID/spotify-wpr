import { Box, Divider, Image, Menu, ScrollArea, Text } from '@mantine/core'
import { Door, Gear, User } from 'phosphor-react'
import React from 'react'
import { zSpotifyStore } from '../../stores/spotify'
import useStyles from './Header.styles'

interface Props {}

const Header: React.FC<Props> = props => {
    const { cx, classes } = useStyles()
    const store = zSpotifyStore()
    console.log(store)
    return (
        <>
            <header className={classes.header}>
                <div></div>
                <Menu
                    control={
                        <Box className={classes.userPill}>
                            {store.user?.images?.at(0)?.url ? (
                                <Image className={classes.image} src={store.user?.images?.at(0)?.url} />
                            ) : (
                                <User className={classes.image} />
                            )}
                        </Box>
                    }
                >
                    <Menu.Item icon={<User />}>Acount</Menu.Item>
                    <Menu.Item icon={<Gear />}>Settings</Menu.Item>
                    <Divider my={5} />
                    <Menu.Item icon={<Door />}>Logout</Menu.Item>
                </Menu>
            </header>
        </>
    )
}

export default Header
