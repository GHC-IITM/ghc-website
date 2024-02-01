import { Container } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LectureHero from "../../components/LectureSeries/Hero";
import FollowWAChannel from "../../components/LectureSeries/Subscribe";

const LectureSeries = () => {
  return (
    <Container maxW={"7xl"} px={0}>
      <Navbar />
      <LectureHero />
      <FollowWAChannel />
      <Footer />
    </Container>
  );
};

export default LectureSeries;
