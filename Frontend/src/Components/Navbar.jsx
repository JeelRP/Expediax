import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(""); // State variable to hold the username

  

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUsername(parsedUser);
        console.log(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
      }
    }
  }, []);
  console.log(localStorage.getItem("user"));

  
  console.log(username);
  return (
    <Box h={"50px"} bg={"#ed64a6"} display={"flex"} justifyContent={"center"}>
      <Box
        w={"100%"}
        maxW={"1024px"}
        color={"white"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <span
          style={{ fontWeight: "500", fontSize: "30px", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}>
          Patel Booking
        </span>
        <Box>
          {username ? (
            <Text fontSize={"2xl"}>{username.details.username}</Text>
          ) : (
            <>
              <Button
                ml={"20px"}
                mt={"10px"}
                padding={"5px 10px"}
                color={"black"}>
                Register
              </Button>
              <Button
                ml={"20px"}
                mt={"10px"}
                padding={"5px 10px"}
                color={"black"}>
                Login
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
