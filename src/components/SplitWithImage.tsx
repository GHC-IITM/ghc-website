import {
  Text,
  Image,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { TfiNewWindow } from "react-icons/tfi";
import { Link } from "react-router-dom";

const SplitWithImage: React.FC<any> = () => {
  return (
    <Container maxW={"7xl"} py={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
        <VStack spacing={6}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/conf.avif"}
            objectFit={"cover"}
          />
          <Heading>Parivahan - The Conference</Heading>
          <Text color={"gray.500"} fontSize={"lg"} textAlign={"justify"}>
            The Global Hyperloop Conference is a precursor to the magnanimous
            Global Hyperloop Competition where the judges, participants,
            sponsors and orgasnisers will find a platform to interact with each
            other and the world. The conference will feature scientists,
            national policy-makers and business tycoons from around the world.
          </Text>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            <Link to={"/events/ghc1.0"}>
              <Button rightIcon={<TfiNewWindow />}>Learn More</Button>
            </Link>
          </motion.div>
        </VStack>
        <VStack spacing={6}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/comp.avif"}
            objectFit={"cover"}
          />
          <Heading>The Competition</Heading>

          <Text color={"gray.500"} fontSize={"lg"} textAlign={"justify"}>
            {/* A melange of science, technology and innovation, the Global Hyperloop Competition brings to India the preliminary stage of the profound idea of the fifth mode of transport - the Hyperloop. */}
            The Global Hyperloop Competition provides a stage for teams, in
            India and abroad, to showcase their innovation and research in the
            field of Hyperloop thereby propagating the concept globally.
            Conducted by IIT Madras, the GHC envisions fostering a spirit of
            transformation and transition among the young minds of the world!
          </Text>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            <Link to={"/events/ghc1.0"}>
              <Button rightIcon={<TfiNewWindow />}>Learn More</Button>
            </Link>
          </motion.div>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default SplitWithImage;
