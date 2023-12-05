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
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import MissionNdvalues from '../../components/MissionNdValues'
import TrackDetails from '../../components/TrackDetails'

export default function Simple() {
    return (
        <Container maxW={'7xl'} px={0}>
            <Box width={'full'}>
                <Navbar />
            </Box>

            <MissionNdvalues />

            <TrackDetails />

            <Box width={'full'}>
                <Footer />
            </Box>
        </Container>
    )
}