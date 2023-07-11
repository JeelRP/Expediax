import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");

  return (
    <Box
      w={"100%"}
      maxW={"1024px"}
      display={"flex"}
      justifyContent={"space-between"}
      gap={"20px"}>
      {loading ? (
        "Loading "
      ) : (
        <>
          {data.map((item) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              flex={"1"}
              gap={"10px"}
            key={item._id}>
              <Image
                w={"100%"}
                src={item.photos[0]}
              />
              <Text fontWeight={"bold"}>{item.name}</Text>
              <Text fontWeight={"400"}>{item.city}</Text>
              <Text fontWeight={"500"}>Startig from $ { item.cheapestPrice}</Text>
              {item.rating && <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <Button
                  bg={"#ed64a6"}
                  colorScheme={"white"}
                  fontWeight={"bold"}>
                  {item.rating}
                </Button>
                <Text>Excellent</Text>
              </Box>}
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default FeaturedProperties;

// import { Box, Button, Image, Text } from "@chakra-ui/react";
// import React from "react";

// const FeaturedProperties = () => {
//   return (
//     <Box
//       w={"100%"}
//       maxW={"1024px"}
//       display={"flex"}
//       justifyContent={"space-between"}
//       gap={"20px"}>
//       <Box display={"flex"} flexDirection={"column"} flex={"1"} gap={"10px"}>
//         <Image
//           w={"100%"}
//           src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
//         />
//         <Text fontWeight={"bold"}>Aparthotel Stare Miasto</Text>
//         <Text fontWeight={"400"}>Madrid</Text>
//         <Text fontWeight={"500"}>Starting from $120</Text>
//         <Box display={"flex"} gap={"10px"} alignItems={"center"}>
//           <Button bg={"#ed64a6"} colorScheme={"white"} fontWeight={"bold"}>
//             8.5
//           </Button>
//           <Text>Excellent</Text>
//         </Box>
//       </Box>

//       {/* Add additional property boxes here */}
//     </Box>
//   );
// };

// export default FeaturedProperties;
