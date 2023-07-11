import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  // Function to toggle password visibility
  const handleClick = () => setShow(!show);

  // Chakra UI toast for displaying notifications
  const toast = useToast();

  // States to store the email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State to track the loading state
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const submitHandler = async () => {
    setLoading(true);

    // Check if email and password are provided
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Send a POST request to the login API endpoint
      const { data } = await axios.post(
        "/auth/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      // Store user information in localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);

      navigate("/") // Redirect to the chat page
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    // <Box
    //   maxW={"xl"}
    //   margin={"auto"}
    //   align={"center"}
    //   bg="white"
    //   w="100%"
    //   p={4}
    //   borderRadius="lg"
    //   borderWidth="1px">
    <VStack
      display={"flex"}
      justifyContent={"center"}
      maxW={"xs"}
      m={"300px auto"}
      alignItems={"center"}
      spacing="10px">
      <FormControl id="email" isRequired paddingBottom={"8px"}>
        <FormLabel fontSize={"20px"}>Email Address</FormLabel>
        <Input
          size={"lg"}
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired paddingBottom={"8px"}>
        <FormLabel fontSize={"20px"}>Password</FormLabel>
        <InputGroup size="md">
          <Input
            size={"lg"}
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" mt={"7px"} size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        size={"lg"}
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        // isLoading={loading}
        fontSize={"20px"}>
        Login
      </Button>
    </VStack>
    // </Box>
  );
};

export default Login;
