import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { InstagramEmbed, LinkedInEmbed } from 'react-social-media-embed';

const Activity: React.FC<any> = () => {
    return (
        <Container maxW='7xl' px={0} overflowX={'hidden'}>
            <Navbar />
            <Container maxW={'3xl'} textAlign={'center'} p={8}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Social Media Activity
                </Heading>
            </Container>

            <Container maxW={'6xl'} my={2} overflowX={'hidden'} mb={16}>
                <Container maxW={'3xl'} textAlign={'center'} mb={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Image alt='insta logo' src='/insta-logo.png' h={8} mr={4} />
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} w={"fit-content"} >
                        Instagram
                    </Heading>
                </Container>
                <Flex flexWrap="wrap" gridGap={10} justify="center">
                    <InstagramEmbed url="https://www.instagram.com/p/C0PNdE8yxfQ/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/CzQx_dSIS4G/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/CyIlA8wJnMK/" width={328} />
                </Flex>
            </Container>


            <Container maxW={'6xl'} my={2} overflowX={'hidden'} mb={12}>
                <Container maxW={'3xl'} textAlign={'center'} mb={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Image alt='insta logo' src='/linkedin-logo.webp' h={16} mr={1} />
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} w={"fit-content"} >
                        LinkedIn
                    </Heading>
                </Container>
                <Flex flexWrap="wrap" gridGap={10} justify="center">
                    <LinkedInEmbed
                        height={570}
                        postUrl="https://www.linkedin.com/posts/global-hyperloop-competition-iitm_hyperloop-indianhyperloop-sustainability-activity-7135929343804878848-rX17"
                        url="https://www.linkedin.com/feed/update/urn:li:share:7135929343804878848"
                        width={325}
                    />
                </Flex>
            </Container>
            <Footer />
        </Container>
    )
}

export default Activity