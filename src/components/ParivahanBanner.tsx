import {
  Box,
  Container,
  IconButton,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <Box as="section" w={"100%"}>
      <Box borderBottomWidth="1px" bg="bg.surface" width={"100%"}>
        <Box py={{ base: "4", md: "3.5" }} width={"full"} px={4}>
          <Stack
            direction="row"
            spacing={{ base: "5", md: "4" }}
            justify="space-between"
            align={"center"}
            w={"full"}
            mx={0}
          >
            <Box>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.500, purple.300)"
                bgClip="text"
                fontSize={"xl"}
                fontWeight={"bold"}
              >
                Introducing Parivahan - Global Hyperloop Conference
              </Text>
              <Text color="fg.muted">
                Experience the future of travel with our groundbreaking
                conference.{" "}
                <Link as={ReactLink} color={"red.400"} to="/register">
                  Click here{" "}
                </Link>
                to grab your tickets!
              </Text>
            </Box>
            <ReactLink to={"/events/ghc1.0"}>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <IconButton
                  icon={<FaInfoCircle />}
                  colorScheme="red"
                  aria-label="Close banner"
                  variant="outline"
                />
              </motion.div>
            </ReactLink>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
