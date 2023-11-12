import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    useBreakpointValue,
    Stack,
    useColorMode
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link, NavLink as RNavLink } from "react-router-dom"

interface Props {
    children: React.ReactNode,
    href: string,
}

const Links = ['Home', 'About', 'Contact', 'Team', 'Login'];
const urls: any = { 'Home': "/", 'About': "/about", 'Contact': "/contact", 'Team': "/team", 'Login': "/login" };

const NavLink: React.FC<Props> = (props: Props) => {
    const { children, href } = props
    return (
        <RNavLink to={href} className={({ isActive, isPending }) =>
            isActive
                ? "active"
                : isPending
                    ? "pending"
                    : ""}>
            <Box
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                }}
            >
                {children}
            </Box>
        </RNavLink>
    )
}

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link to='/'>
                            <Text
                                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                fontFamily={'heading'}
                                fontWeight={700}
                                color={useColorModeValue('gray.800', 'white')}
                            >GHC</Text>
                        </Link>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink href={urls[link]} key={urls[link]}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Link to={"/signup"}>
                            <Button
                                variant={'solid'}
                                bg={'red.400'}
                                colorScheme={'red'}
                                size={'sm'}
                                mr={2.5}
                                leftIcon={<AddIcon />}
                            >
                                Sign Up
                            </Button>
                        </Link>
                        <Button mr={'2.5'} onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    bg={"gray.700"}
                                />
                            </MenuButton>
                            <MenuList>
                                <Link to={"/login"}>
                                    <MenuItem>Login</MenuItem>
                                </Link>
                                <Link to={"/signup"}>
                                    <MenuItem>Sign Up</MenuItem>
                                </Link>
                                <MenuDivider />
                                <MenuItem>Team</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink href={urls[link]} key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}