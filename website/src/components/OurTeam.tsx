import { StarIcon } from '@chakra-ui/icons'
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
// import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'
import { BiMoney } from 'react-icons/bi'
import { FaBusinessTime, FaMapMarkedAlt, FaMoneyBill } from 'react-icons/fa'

interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    )
}

export default function OurTeam() {
    return (
        <Container maxW={'5xl'} py={12} mb={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Our Story
                    </Text>
                    <Heading>A Hyperloop Promoting Team!</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Meet our dynamic team—a fusion of diverse talents driven by a shared passion for excellence. With expertise spanning various domains, we thrive on collaboration and innovation. Together, we navigate challenges, turning them into opportunities.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }>
                        <Feature
                            icon={<Icon as={FaBusinessTime} color={'yellow.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Business Planning'}
                        />
                        <Feature
                            icon={<Icon as={FaMoneyBill} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Financial Planning'}
                        />
                        <Feature
                            icon={<Icon as={FaMapMarkedAlt} color={'purple.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Market Analysis'}
                        />
                    </Stack>
                </Stack>

            </SimpleGrid>
        </Container>
    )
}