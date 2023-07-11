import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const MailList = () => {
  return (
    <Box
      w={"100%"}
      mt={"50px"}
      display={"flex"}
      bg={"#ed64a6"}
      color={"white"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
      padding={"50px"}>
      <Heading>Save Time, Save money</Heading>
      <Text>Sign up and we'll send the best deals to you</Text>
      <Box>
        <Input
          type="text"
          placeholder="Your Email"
          w={"300px"}
          h={"50px"}
          p={"10px"}
          mr={"10px"}
          bg={"white"}
          color={"black"}
        />
        <Button
          mb={"4px"}
          w={"90px"}
          h={"50px"}
          bg={"#0071c2"}
          colorScheme={"white"}
          fontWeight={"500"}>
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default MailList;
