import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const HostelAccomodation = () => {
  return (
    <Box w={"full"} px={0} overflowX={"hidden"}>
      <Navbar />

      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Accommodation for the Conference</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input focusBorderColor="red.400" type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input focusBorderColor="red.400" type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox defaultChecked={true} colorScheme="red">
                  I will be at IIT Madras on 19, 20 and 21st of April
                </Checkbox>
              </Stack>
              <Button colorScheme={"red"} variant={"solid"}>
                Proceed to payment
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/hostel-acc.png"}
          />
        </Flex>
      </Stack>

      <Footer />
    </Box>
  );
};

export default HostelAccomodation;
