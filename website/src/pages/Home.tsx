import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TimeLine from '../components/TimeLine';
import Footer from '../components/Footer';
import Business from '../components/Business';
import FAQ from '../components/FAQ';
import { Box } from '@chakra-ui/react';

const Home: React.FC<any> = () => {
    return (
        <Box maxWidth={'full'}>
            <Navbar />
            <HeroSection />
            <Business />
            <TimeLine id='timeline' />
            <FAQ />
            <Footer />
        </Box>
    )
}

export default Home;