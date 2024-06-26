import {
  Box,
  Text,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/HomeHero";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Documents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to calculate the time difference
  const timeDifference = (date: string) => {
    const now = new Date();
    const pastDate = new Date(date);
    const diff = now.getTime() - pastDate.getTime(); // Convert to milliseconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 5) {
      return `New`;
    } else {
      return `${days} days ago`;
    }
  };

  return (
    <Container maxW={"7xl"} px={4}>
      <Navbar />

      <Flex direction="column" align="center" justify="center" minHeight="70vh">
        <VStack spacing={8} align="center" textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            color={useColorModeValue("teal.600", "teal.300")}
          >
            Document Archive
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.300")}>
            Explore our collection of documents and resources
          </Text>

          <LinkBox
            as="article"
            maxW="md"
            p={5}
            borderWidth={10}
            rounded="lg"
            shadow="md"
            bg={useColorModeValue("white", "gray.700")}
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Box
              as="time"
              dateTime="2024-06-03T15:30:00Z"
              color={useColorModeValue("gray.500", "gray.400")}
            >
              {timeDifference("2024-06-25T15:30:00Z")}
            </Box>
            <Heading size="md" my={2}>
              <LinkOverlay
                href="https://ghc-document.s3.ap-south-1.amazonaws.com/GHC+2025+R%26R+Version+1.0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                color={useColorModeValue("teal.500", "teal.300")}
              >
                Rules and Regulation Document
              </LinkOverlay>
            </Heading>
            <Text color={useColorModeValue("gray.600", "gray.300")}>
              GLOBAL HYPERLOOP COMPETITION 2025
            </Text>
          </LinkBox>

          <LinkBox
            as="article"
            maxW="md"
            p={5}
            borderWidth={10}
            rounded="lg"
            shadow="md"
            bg={useColorModeValue("white", "gray.700")}
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Box
              as="time"
              dateTime="2024-06-03T15:30:00Z"
              color={useColorModeValue("gray.500", "gray.400")}
            >
              {timeDifference("2024-06-03T15:30:00Z")}
            </Box>
            <Heading size="md" my={2}>
              <LinkOverlay
                href="https://ghc-document.s3.ap-south-1.amazonaws.com/GHC+2025+Track+%26+Tube+Documentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                color={useColorModeValue("teal.500", "teal.300")}
              >
                Track and Tube Information Document
              </LinkOverlay>
            </Heading>
            <Text color={useColorModeValue("gray.600", "gray.300")}>
              GLOBAL HYPERLOOP COMPETITION 2025
            </Text>
          </LinkBox>
        </VStack>
      </Flex>

      <Box width={"full"} mt={8}>
        <Footer />
      </Box>
    </Container>
  );
};

export default Documents;
