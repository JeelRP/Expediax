import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Box, Heading } from "@chakra-ui/react";
import Featured from "../Components/Featured";
import Property from "../Components/Property";
import FeaturedProperties from "../Components/FeaturedProperties";
import MailList from "../Components/MailList";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Box
        mt={"50px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"30px"}>
        <Featured />
        <Heading as={"h1"} w={"100%"} maxW={"1024px"} fontSize={"20px"}>
          Browse by Property Type
        </Heading>
        <Property />
        <Heading as={"h1"} w={"100%"} maxW={"1024px"} fontSize={"20px"}>
          Homes guest love
        </Heading>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </Box>

    </div>
  );
};

export default Home;

// import React from "react";
// import { Box, Heading, Flex } from "@chakra-ui/react";
// import Navbar from "../Components/Navbar";
// import Header from "../Components/Header";
// import Featured from "../Components/Featured";
// import Property from "../Components/Property";
// import FeaturedProperties from "../Components/FeaturedProperties";
// import MailList from "../Components/MailList";
// import Footer from "../Components/Footer";

// const Home = () => {
//   return (
//     <Box>
//       <Navbar />
//       <Header />
//       <Flex
//         direction={{ base: "column", md: "row" }}
//         align="center"
//         mt={["50px", null, "100px"]}
//         p={4}
//         maxW="1024px"
//         mx="auto"
//         flexWrap="wrap">
//         <Box flex="1" w="100%">
//           <Featured />
//           <Heading as="h1" fontSize={["lg", "xl"]} textAlign="center" mt={8}>
//             Browse by Property Type
//           </Heading>
//           <Property />
//         </Box>
//         <Box flex="1" w="100%">
//           <Heading as="h1" fontSize={["lg", "xl"]} textAlign="center" mt={8}>
//             Homes guests love
//           </Heading>
//           <FeaturedProperties />
//         </Box>
//       </Flex>
//       <MailList />
//       <Footer />
//     </Box>
//   );
// };

// export default Home;
