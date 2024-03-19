import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 16 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          textAlign={"left"}
        >
          Parivahan is happening{" "}
          <Text as={"span"} color={"red.400"}>
            now!
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} textAlign={"justify"}>
          Parivahan - The Global Hyperloop Conference (GHC) will be happening on
          19th, 20th and 21st of April 2024 at IIT Madras Research Park. Make
          sure to resgister and book your accomodation.
        </Text>
        <Stack
          spacing={6}
          direction={{ base: "column", sm: "row" }}
          alignItems={{ base: "flex-start", sm: "normal" }}
          justifyContent={"center"}
          w={"full"}
        >
          <Link to={"/events/ghc1.0/register"}>
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
              >
                Get your passes
              </Button>
            </motion.div>
          </Link>

          <Link to={"/events/ghc1.0/accomodation"}>
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <Button rounded={"full"} px={6}>
                Book accomodation
              </Button>
            </motion.div>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
