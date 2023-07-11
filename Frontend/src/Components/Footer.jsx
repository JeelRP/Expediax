import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box w={"100%"} maxW={"1024px"} fontSize={"12px"}>
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        mb={"50px"}>
        <UnorderedList listStyleType={"none"}>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Countries</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Regions</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Cities</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Airports</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Hotels</ListItem>
        </UnorderedList>
        <UnorderedList listStyleType={"none"}>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Countries</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Regions</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Cities</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Airports</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Hotels</ListItem>
        </UnorderedList>
        <UnorderedList listStyleType={"none"}>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Countries</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Regions</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Cities</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Airports</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Hotels</ListItem>
        </UnorderedList>
        <UnorderedList listStyleType={"none"}>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Countries</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Regions</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Cities</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Airports</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Hotels</ListItem>
        </UnorderedList>
        <UnorderedList listStyleType={"none"}>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Countries</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Regions</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Cities</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Airports</ListItem>
          <ListItem color={"#003580"} mb={"10px"} cursor={"pointer"}>Hotels</ListItem>
        </UnorderedList>
      </Box>
      <Box>Copyright © 2023 Patel Booking.</Box>
    </Box>
  );
};

export default Footer;
