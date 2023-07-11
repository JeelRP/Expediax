import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Gandhinagar,Ahmedabad,Patan"
  );

  // console.log(data);
  return (
    <Box
      zIndex={1}
      w={"100%"}
      maxW={"1024px"}
      display={"flex"}
      justifyContent={"space-between"}
      gap={"20px"}>
      {loading ? (
        "Loading Please wait"
      ) : (
        <>
          <Box
            borderRadius={"10px"}
            overflow={"hidden"}
            position={"relative"}
            height={"230px"}>
            <Image
              objectFit={"cover"}
              w={"100%"}
              alt="Image not Found"
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            />
            <Box
              position={"absolute"}
              bottom={"20px"}
              ml={"20px"}
              color={"whiteAlpha.900"}>
              <Heading as="h1" size="xl">
                Gandhinagar
              </Heading>
              <Heading as="h2" size="lg">
                {data[0]} properties
              </Heading>
            </Box>
          </Box>
          <Box
            borderRadius={"10px"}
            overflow={"hidden"}
            position={"relative"}
            height={"230px"}>
            <Image
              objectFit={"cover"}
              w={"100%"}
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="Image not Found"
            />
            <Box
              position={"absolute"}
              bottom={"20px"}
              ml={"20px"}
              color={"whiteAlpha.900"}>
              <Heading as="h1" size="xl">
                Ahmedabad
              </Heading>
              <Heading as="h2" size="lg">
                {data[1]} properties
              </Heading>
            </Box>
          </Box>
          <Box
            borderRadius={"10px"}
            overflow={"hidden"}
            position={"relative"}
            height={"230px"}>
            <Image
              objectFit={"cover"}
              w={"100%"}
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="Image not Found"
            />
            <Box
              position={"absolute"}
              bottom={"20px"}
              ml={"20px"}
              color={"whiteAlpha.900"}>
              <Heading as="h1" size="xl">
                Patan
              </Heading>
              <Heading as="h2" size="lg">
                {data[2]}  properties
              </Heading>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Featured;

// import { Box, Heading, Image } from "@chakra-ui/react";
// import React from "react";

// const Featured = () => {
//   return (
//     <Box
//       zIndex={1}
//       w={{ base: "100%", md: "100%", lg: "80%" }}
//       maxW={"1024px"}
//       display={"flex"}
//       flexWrap="wrap"
//       justifyContent={{ base: "center", md: "space-between" }}
//       gap={"20px"}
//       marginX="auto">
//       <Box
//         borderRadius={"10px"}
//         overflow={"hidden"}
//         position={"relative"}
//         width={{ base: "100%", md: "30%", lg: "30%" }}
//         height={{ base: "200px", md: "230px" }}
//         marginBottom="20px">
//         <Image
//           objectFit={"cover"}
//           w={"100%"}
//           h={"100%"}
//           alt="Image not Found"
//           src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
//         />
//         <Box
//           position={"absolute"}
//           bottom={"20px"}
//           ml={"20px"}
//           color={"whiteAlpha.900"}>
//           <Heading as="h1" size="xl">
//             Dublin
//           </Heading>
//           <Heading as="h2" size="lg">
//             123 properties
//           </Heading>
//         </Box>
//       </Box>
//       <Box
//         borderRadius={"10px"}
//         overflow={"hidden"}
//         position={"relative"}
//         width={{ base: "100%", md: "30%", lg: "30%" }}
//         height={{ base: "200px", md: "230px" }}
//         marginBottom="20px">
//         <Image
//           objectFit={"cover"}
//           w={"100%"}
//           h={"100%"}
//           src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
//           alt="Image not Found"
//         />
//         <Box
//           position={"absolute"}
//           bottom={"20px"}
//           ml={"20px"}
//           color={"whiteAlpha.900"}>
//           <Heading as="h1" size="xl">
//             Reno
//           </Heading>
//           <Heading as="h2" size="lg">
//             533 properties
//           </Heading>
//         </Box>
//       </Box>
//       <Box
//         borderRadius={"10px"}
//         overflow={"hidden"}
//         position={"relative"}
//         width={{ base: "100%", md: "30%", lg: "30%" }}
//         height={{ base: "200px", md: "230px" }}
//         marginBottom="20px">
//         <Image
//           objectFit={"cover"}
//           w={"100%"}
//           h={"100%"}
//           src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
//           alt="Image not Found"
//         />
//         <Box
//           position={"absolute"}
//           bottom={"20px"}
//           ml={"20px"}
//           color={"whiteAlpha.900"}>
//           <Heading as="h1" size="xl">
//             Austin
//           </Heading>
//           <Heading as="h2" size="lg">
//             532 properties
//           </Heading>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Featured;
