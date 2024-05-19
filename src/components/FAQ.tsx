import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function SimpleAccordion() {
  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      marginBottom={"5%"}
      justify={"center"}
      flexDirection={"column"}
      //   bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Text fontWeight={600} fontSize={"4xl"} padding={5}>
        FAQs
      </Text>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl">What is GHC?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                GHC is a student-run organisation, which aims to conduct the
                Global Hyperloop Competition and create an international
                collaborative Hyperloop community.
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
              <Text fontSize="xl" textAlign={"left"} pr={4}>
                {" "}
                When and where will be Parivahan held?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                The conference was held on 20th and 21st of April 2024 at
                IIT Madras Research Park.
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
              <Text fontSize="xl"> Who can register?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                The conference is open to all. You can register for free!
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
