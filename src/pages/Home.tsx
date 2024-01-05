import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

const Home: React.FC<any> = () => {
    return (
        <Box maxWidth={'full'}>
            <Navbar />
            <HeroSection />

            <Footer />
        </Box>
    )
}

export default Home;