import { Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MissionNdvalues from "../../components/MissionNdValues";
import TrackDetails from "../../components/TrackDetails";

export default function Simple() {
  return (
    <Box maxWidth={"full"} px={0}>
      <Navbar />

      <MissionNdvalues />

      <TrackDetails />

      <Box width={"full"}>
        <Footer />
      </Box>
    </Box>
  );
}
