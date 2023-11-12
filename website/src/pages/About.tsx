import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react'
import { MdLocationOn } from 'react-icons/md'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MissionNdvalues from '../components/MissionNdValues'
import TrackDetails from '../components/TrackDetails'

export default function Simple() {
    return (
        <Container maxW={'7xl'} px={0}>
            <Box width={'full'}>
                <Navbar />
            </Box>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 20 }}
                px={4}
            >
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            'https://th.bing.com/th/id/OIG.S3V42QoUZFJOnye7G5K.?pid=ImgGn&w=1024&h=1024&rs=1'
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}

                        >
                            Why GHC?
                        </Heading>
                        <Text
                            color={useColorModeValue('red.600', 'red.400')}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            Global Hyperloop Competetion
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                A global hyperloop competition is being held to foster innovation, collaboration, and advancement in the field of hyperloop technology. By bringing together teams from around the world, the competition aims to push the boundaries of transportation and revolutionize the way we travel.
                            </Text>
                            <Text fontSize={'lg'}>
                                The competition not only serves as a platform for competition but also as a collaborative space for knowledge-sharing and networking among industry professionals, researchers, and enthusiasts.
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('red.500', 'red.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Goals
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>Chronograph</ListItem>
                                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                                    <ListItem>Tachymeter</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Anti‑magnetic</ListItem>
                                    <ListItem>Chronometer</ListItem>
                                    <ListItem>Small seconds</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('red.500', 'red.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Event Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Between lugs:
                                    </Text>{' '}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Bracelet:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case:
                                    </Text>{' '}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case diameter:
                                    </Text>{' '}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Dial color:
                                    </Text>{' '}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Crystal:
                                    </Text>{' '}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
                                    inside
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Water resistance:
                                    </Text>{' '}
                                    5 bar (50 metres / 167 feet){' '}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                    <Link to="/signup">
                        <Button
                            // rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            // bg={useColorModeValue('gray.900', 'gray.50')}
                            color={'white'}
                            bg={'red.400'}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}
                            colorScheme='red'
                        >
                            Sign Up
                        </Button>
                    </Link>


                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocationOn />
                        <Text>Chennai, Tamil Nadu</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
            <Box my={6} width={'100%'}>
                <Box height={'1px'} backgroundColor={useColorModeValue('gray.200', 'gray.600')} width={'40%'} m={'auto'}></Box>
            </Box>
            <MissionNdvalues />

            <TrackDetails />

            <Box width={'full'}>
                <Footer />
            </Box>
        </Container>
    )
}