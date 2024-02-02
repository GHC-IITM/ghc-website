import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  Box,
  AspectRatio,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Videos() {
  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      marginBottom={"5%"}
      justify={"center"}
      flexDirection={"column"}
      //   bg={useColorModeValue('gray.50', 'gray.800')}
      maxW={"7xl"}
    >
      <Text fontWeight={600} fontSize={{ base: "3xl", md: "5xl" }} padding={5}>
        Lectures:
      </Text>
      <Container
        w={"full"}
        maxW={"7xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Accordion allowMultiple width="100%" maxW="5xl" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl">INFRASTRUCTURE</Text>
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="lg"
                opacity={0.7}
                ml={"auto"}
              >
                {" "}
                loopMIT (2 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel
              pb={6}
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Text
                color="gray.500"
                w={"85%"}
                mr={8}
                mb={{ base: 8, md: 0 }}
                textAlign={"justify"}
              >
                The propulsion system is crucial for achieving the unprecedented
                speeds and efficiency associated with this cutting-edge
                transportation concept. loopMIT uses a meticulously engineered
                single-sided linear induction motor, which is the driving force
                behind propelling the pod through a partial vacuum tube at high
                speeds. The levitation department is responsible for maintaining
                the vehicle's elevation above the track via magnetic levitation
                to lift the pod and keep it suspended during travel. Visit
                loopMIT at:{" "}
                <Link to="https://www.loopmit.in/" target="_blank">
                  <Text color={"red.400"} _hover={{ textDecor: "underline" }}>
                    https://www.loopmit.in/
                  </Text>
                </Link>
              </Text>
              <Box
                position={"relative"}
                height={{ base: "260px", md: "300px" }}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <AspectRatio h={"100%"} w={"100%"} ratio={1}>
                  <iframe
                    title="Infrastructure"
                    src="https://www.youtube.com/embed/rp35Dgmx_EI?si=IBVeyaqb1KaM-FRl"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" textAlign={"left"} pr={4}>
                {" "}
                MECHANICAL
              </Text>
              <Text fontSize="lg" opacity={0.7} ml={"auto"}>
                {" "}
                Vegapod Hyperloop (6 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.500, purple.300)"
                bgClip="text"
                fontSize={"xl"}
                fontWeight={"bold"}
              >
                Coming Soon!
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" textAlign={"left"}>
                {" "}
                SENSE AND CONTROL
              </Text>
              <Text fontSize="lg" opacity={0.7} ml={"auto"}>
                {" "}
                Nirmaan Hyperloop (8 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.500, purple.300)"
                bgClip="text"
                fontSize={"xl"}
                fontWeight={"bold"}
              >
                Coming Soon!
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl"> POWER SYSTEM</Text>
              <Text fontSize="lg" opacity={0.7} ml={"auto"}>
                {" "}
                Infinity Hyperloop (10 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.500, purple.300)"
                bgClip="text"
                fontSize={"xl"}
                fontWeight={"bold"}
              >
                Coming Soon!
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl"> PROPULSION</Text>
              <Text fontSize="lg" opacity={0.7} ml={"auto"}>
                {" "}
                Avishkar Hyperloop (12 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.500, purple.300)"
                bgClip="text"
                fontSize={"xl"}
                fontWeight={"bold"}
              >
                Coming Soon!
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
