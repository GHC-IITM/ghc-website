import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    useColorModeValue} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
    FcApproval,
    FcBullish,
    FcConferenceCall,
} from 'react-icons/fc';

interface CardProps {
    heading: string
    description?: string
    icon: ReactElement
    href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
        <Box
            maxW={{ base: 'full', md: '400px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={8}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.200', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    {description && <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>}
                </Box>
                {/* <Button variant={'link'} colorScheme={'red'} size={'sm'}>
                    Learn more
                </Button> */}
            </Stack>
        </Box>
    )
}

export default function MissionNdvalues() {
    return (
        <Box p={2} py={8} pb={10}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} py={4} mb={10}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Why Hyperloop?
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    The Problem
                </Text>
            </Stack>

            <Container maxW={'5xl'} my={12}>
                <Flex flexWrap="wrap" gridGap={10} justify="center">
                    <Box
                        maxW={{ base: 'full', md: '400px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={8}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                    >
                        <Heading size="md">{'Carbon Emissions, Greenhouse Gases'}</Heading>
                    </Box>
                    <Box
                        maxW={{ base: 'full', md: '400px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={8}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                    >
                        <Heading size="md">{'Max Speed of air transport is 380m/s'}</Heading>
                    </Box>
                    <Box
                        maxW={{ base: 'full', md: '400px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={8}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                    >
                        <Heading size="md">{'Lack of immunity against harsh weather conditions'}</Heading>
                    </Box>
                    <Box
                        maxW={{ base: 'full', md: '400px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={8}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                    >
                        <Heading size="md">{'High energy consumption'}</Heading>
                    </Box>
                </Flex>
            </Container>

            <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'} py={4} mb={10} id='what-is-hyperloop'>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} py={4}>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        What is Hyperloop?
                    </Heading>
                    <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                        The Solution!
                    </Text>
                </Stack>
                <Box textAlign={'left'} alignSelf={'center'} color={useColorModeValue('gray.600', 'gray.300')}>
                    <Text mb={4} fontSize={'lg'}>
                        Hyperloop, the “fifth mode of transport”, is a high speed rail system which essentially aims to eliminate the two major sources of friction - rolling friction (friction between the wheels of the train and the rails) and air drag. Moreover, it incorporates the use of magnetic levitation of a “pod” moving within a partially evacuated “tube” thereby, achieving a considerably high speed which can potentially reach till the speed of sound.
                    </Text>
                    <Text fontSize={'lg'}>
                        This mode of transport will be marked by its immunity to weather, collision free commute which can move at twice the speed of a plane, with low power consumption and energy storage for 24-hour operations. Moreover, with the effective use of solar energy, this mode of transport can easily sustain itself for long durations.
                    </Text>
                </Box>

            </Stack>

            <Container maxW={'4xl'} py={16}>
                <Box textAlign={'center'} mb={8}>
                    <Heading fontSize={{ base: '2xl', sm: '5xl' }} fontWeight={'bold'} >
                        Why GHC?
                    </Heading>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
                    <VStack spacing={6}>
                        <Heading fontSize={{ base: '1xl', sm: '3xl' }} color={useColorModeValue('gray.700', 'gray.300')}>
                            To explain why Hyperloop is a boon to mankind
                        </Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            Hyperloop trumps the four existing forms of transport in ways more than one - high speed and connectivity with significantly lesser power consumption. The GHC aims to shed light on these benefits of the hyperloop and generate great interest and support for  its introduction to the world as the new and primary form of transportation.
                        </Text>
                    </VStack>
                    <VStack spacing={6}>

                        <Heading fontSize={{ base: '1xl', sm: '3xl' }} color={useColorModeValue('gray.700', 'gray.300')}>
                            To pave way for extensive research and collaboration
                        </Heading>

                        <Text color={'gray.500'} fontSize={'lg'}>
                            The Global Hyperloop Competition will essentially serve as a platform for forging innovation among the teams around the world to take Hyperloop development to greater heights. This is not only a competition, but a pedestal for the world to come together and re-engineer mobility. This collaboration, coupled with the sheer knack of Hyperloop development among enthusiasts from industry and academia alike, brings out a plethora of caricature to realise this mode of transportation.
                        </Text>
                    </VStack>
                </SimpleGrid>
            </Container>


            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} my={6}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    GHC’s Mission
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Transcending borders in speed and innovation
                </Text>
            </Stack>

            <Container maxW={'5xl'} my={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'Promoting the benefits of a hyperloop driven world'}
                        icon={<Icon as={FcBullish} w={10} h={10} />}
                        description={'By explaining the hyperloop technologies and its associated benefits to people, GHC will ensure the development of a massive hyperloop community over the years'}
                        href={'#'}
                    />
                    <Card
                        heading={'The Conference'}
                        icon={<Icon as={FcConferenceCall} w={10} h={10} />}
                        description={'Serving as a stage for hyperloop enthusiasts, the Conference gives an opportunity for networking and collaboration among students, academicians and industrialists in order to propel the research and development of the hyperloop technologies.'}
                        href={'#'}
                    />
                    <Card
                        heading={'The Competition'}
                        icon={<Icon as={FcApproval} w={10} h={10} />}
                        description={'Engaging students and teams to ideate, innovate and develop according to the 400 m long track, the first of its kind - globally- is the main goal of the Competition. The competitive spirit will drive teams to unleash their best innovative spirits which will showcase the different perspectives on the hyperloop technology and thereby, assist its growth.'}
                        href={'#'}
                    />
                </Flex>
            </Container>
        </Box>
    )
}