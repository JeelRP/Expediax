import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <Box
      border={"1px solid lightgreen"}
      p={"10px"}
      borderRadius={"5px"}
      display={"flex"}
      justifyContent={"space-between"}
      gap={"20px"}
      mb={"20px"}>
      <Img h={"200px"} w={"200px"} objectFit={"cover"} src={item.photos[0]} />
      <Box display={"flex"} flex={"2"} flexDirection={"column"} gap={"10px"}>
        <Heading as={"h1"}>{item.name}</Heading>
        <Text fontSize={"20px"} color={"#0071c2"}>
          {item.distance}m from center
        </Text>
        <Text
          fontSize={"12px"}
          bgColor={"#008009"}
          color={"white"}
          w={"max-content"}
          p={"3px"}
          borderRadius={"5px"}>
          Free airport taxi
        </Text>
        <Text fontSize={"12px"} fontWeight={"bold "}>
          Studio Apartment with Air conditioning
        </Text>
        <Text fontSize={"12px"}>{item.desc}</Text>
        <Text fontSize={"12px"} color={"#008009"} fontWeight={"bold"}>
          Free cancellation{" "}
        </Text>
        <Text fontSize={"12px"} color={"#008009"}>
          You can cancel later, so lock in this great price today!
        </Text>
      </Box>
      <Box
        flex={"1"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}>
        {item.rating && (
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text fontWeight={"500"}>Excellent</Text>
            <Button
              bg={"#ed64a6"}
              colorScheme={"white"}
              p={"5px"}
              fontWeight={"bold"}>
              {item.rating}
            </Button>
          </Box>
        )}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"5px"}
          textAlign={"right"}>
          <Text fontSize={"24px"}>${item.cheapestPrice}</Text>
          <Text fontSize={"12px"} color={"gray"}>
            Icludes taxes and fees
          </Text>
          <Link to={`/hotels/${item._id}`}>
            <Button
              // bgColor={"#0071c2"}
              // color={"white"}
              colorScheme="telegram"
              p={"10px 5px"}
              fontWeight={"bold"}>
              See availability
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchItem;
