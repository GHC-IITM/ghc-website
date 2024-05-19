import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  FormLabel,
  FormControl,
  Link,
  Select,
} from "@chakra-ui/react";
import SignUpField from "../../../components/ghc1.0/SignUpField";
import { useNavigate, Link as ReactLink } from "react-router-dom";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

const Form1 = ({ handleChange, input }: any) => {
  return (
    <>
      <SignUpField
        onChange={handleChange}
        value={input.email}
        id="email"
        label="Email address"
        placeholder="firstname@lastname.io"
        type="email"
      />
    </>
  );
};

const Form2 = ({ handleChange, input }: any) => {
  return (
    <SignUpField
      onChange={handleChange}
      value={input.code}
      id="code"
      label="Enter Code"
      placeholder="Ex: 123456"
      type="text"
    />
  );
};

const Form3 = ({ handleChange, input }: any) => {
  return (
    <>
      <SignUpField
        onChange={handleChange}
        value={input.name}
        id="name"
        label="Full Name"
        placeholder="Ex: John Doe"
        type="text"
      />
      <SignUpField
        onChange={handleChange}
        value={input.phone_number}
        id="phone_number}"
        label="Phone Number"
        placeholder="Ex: 1234567890"
        type="number"
      />

      <FormControl isRequired id={"gender"}>
        <FormLabel color={"gray.600"}>Gender</FormLabel>
        <Select
          onChange={handleChange}
          value={input.gender}
          placeholder="Select option"
          color={"gray.400"}
          bg={"gray.100"}
        >
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </Select>
      </FormControl>
    </>
  );
};

const Form4 = ({ handleChange, input }: any) => {
  return (
    <>
      <SignUpField
        onChange={handleChange}
        value={input.addressLineOne}
        id="addressLineOne"
        label="Address"
        placeholder="Ex: 1234 Main St"
        type="text"
      />

      <Stack display={"flex"} flexDirection={"row"} spacing={2}>
        <SignUpField
          onChange={handleChange}
          value={input.city}
          id="city"
          label="City"
          placeholder="Ex: New York"
          type="text"
        />
        <SignUpField
          onChange={handleChange}
          value={input.country}
          id="country"
          label="Country"
          placeholder="Ex: United States"
          type="text"
        />
      </Stack>

      <FormControl isRequired id={"profession"}>
        <FormLabel color={"gray.600"}>Profession</FormLabel>
        <Select
          onChange={handleChange}
          value={input.profession}
          placeholder="Select your Profession"
          color={"gray.400"}
          bg={"gray.100"}
        >
          <option value="option1">Student</option>
          <option value="option2">Academics and Researchers</option>
          <option value="option3">Industry Professionals</option>
          <option value="option3">Government Officials</option>
          <option value="option3">Entrepreneurs and Start-up Founders</option>
          <option value="option3">Legal Professionals</option>
          <option value="option3">Health Professionals</option>
          <option value="option3">Technology Enthusiasts and Innovators</option>
          <option value="option3">Educators and School Administrators</option>
        </Select>
      </FormControl>
    </>
  );
};

export default function RegisterForConference() {
  const [step, setStep] = useState<number>(1);
  const [input, setInput] = useState({
    email: "",
    password: "",
    teamname: "",
    homeUniversity: "",
    activemembers: undefined,
    attendeventmembers: undefined,
    teamrepresentetive: "",
    emailrepresentetive: "",
    numberrepresentetive: undefined,
    teamlogo: "",
    officialteamname: "",
    teamaddress: "",
    country: "",
    postalcode: undefined,
  });
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleChange(e: any) {
    const { name, value } = e.target;
    setError(undefined);
    setLoading(false);
    setInput((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <Box
      position={"relative"}
      h={"100vh"}
      overflowY={useBreakpointValue({ md: "hidden" })}
    >
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 16 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            zIndex={100}
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Register Now for the International Hyperloop Conference{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,purple.400)"
              bgClip="text"
            >
              !
            </Text>
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,purple.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 0 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              mb={2}
            >
              Join our journey
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,purple.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
          </Stack>
          <Box marginY={"auto"} as={"form"} py={{ base: 6, sm: 0 }}>
            <Stack key={step} spacing={2}>
              {step == 1 ? (
                <Form1 handleChange={handleChange} input={input} />
              ) : step == 2 ? (
                <Form2 handleChange={handleChange} input={input} />
              ) : step == 3 ? (
                <Form3 handleChange={handleChange} input={input} />
              ) : (
                <Form4 handleChange={handleChange} input={input} />
              )}
            </Stack>
            {/* <img src={file} /> */}
            <Text align={"center"} color={"red.600"} pt={2}>
              {error}
            </Text>
            {step === 4 ? (
              <Stack display={"flex"} flexDirection={"row"} spacing={4}>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  variant={"outline"}
                  colorScheme={"red"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,purple.400)",
                    boxShadow: "xl",
                    color: "white",
                  }}
                  onClick={() => setStep((prev) => prev - 1)}
                >
                  Back
                </Button>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,purple.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,purple.400)",
                    boxShadow: "xl",
                  }}
                  isLoading={loading}
                >
                  Submit
                </Button>
              </Stack>
            ) : (
              <Stack display={"flex"} flexDirection={"row"} spacing={4}>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  variant={"outline"}
                  colorScheme={"red"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,purple.400)",
                    boxShadow: "xl",
                    color: "white",
                  }}
                  onClick={() => setStep((prev) => prev - 1)}
                  isDisabled={step === 1}
                >
                  Back
                </Button>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,purple.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,purple.400)",
                    boxShadow: "xl",
                  }}
                  onClick={() => setStep((prev) => prev + 1)}
                >
                  {step === 2 ? "Verify" : "Next"}
                </Button>
              </Stack>
            )}
            {step === 1 && (
              <Text pt={8} color="gray.700">
                Wanna know more about the conference?{" "}
                <Link as={ReactLink} color={"red.400"} to="/events/ghc1.0">
                  Click here
                </Link>
              </Text>
            )}

            {step === 2 && (
              <Text pt={8} color="gray.700">
                Didn't get a verification code?{" "}
                <Link as={ReactLink} color={"red.400"} to="//events/ghc1.0">
                  Resend code
                </Link>
              </Text>
            )}
          </Box>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-100}
        left={-50}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}
