import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  useNumberInput,
} from "@chakra-ui/react";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./style.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [username, setUsername] = useState("");
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.01,
      defaultValue: 0,
      min: 1,
      max: 6,
      precision: 2,
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

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
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);
  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotel", { state: { destination, dates, options } });
  };
  return (
    <Box
      display={"flex"}
      bg={"#ed64a6"}
      justifyContent={"center"}
      color="white"
      py={5}
      position="relative">
      <Flex
        display={"flex"}
        direction={"column"}
        mb="100"
        w={"100%"}
        maxW="1024px"
        m={"20px 0px 100px 0px"}>
        <Flex
          gap={"30px"}
          className={type === "list" ? "list Mode" : "NoList Mode"}>
          <Box
            className="headerListItem"
            borderRadius="20px"
            border="1px solid white"
            padding={2}
            color="white"
            _hover={{ bg: "white", color: "#003580", cursor: "pointer" }}
            display="flex"
            alignItems="center"
            gap={"10px"}>
            <FontAwesomeIcon icon={faBed} />
            <Text>Stays</Text>
          </Box>
          <Box
            className="headerListItem"
            borderRadius="20px"
            padding={2}
            color="white"
            _hover={{ bg: "white", color: "#003580", cursor: "pointer" }}
            display="flex"
            alignItems="center"
            gap={"10px"}>
            <FontAwesomeIcon icon={faPlane} />
            <Text>Flights</Text>
          </Box>
          <Box
            className="headerListItem"
            borderRadius="20px"
            padding={2}
            color="white"
            _hover={{ bg: "white", color: "#003580", cursor: "pointer" }}
            display="flex"
            alignItems="center"
            gap={"10px"}>
            <FontAwesomeIcon icon={faCar} />
            <Text>Car rentals</Text>
          </Box>
          <Box
            className="headerListItem"
            borderRadius="20px"
            padding={2}
            color="white"
            _hover={{ bg: "white", color: "#003580", cursor: "pointer" }}
            display="flex"
            alignItems="center"
            gap={"10px"}>
            <FontAwesomeIcon icon={faBed} />
            <Text>Attractions</Text>
          </Box>
          <Box
            borderRadius="20px"
            padding={2}
            color="white"
            _hover={{ bg: "white", color: "#003580", cursor: "pointer" }}
            display="flex"
            alignItems="center"
            gap={"10px"}>
            <FontAwesomeIcon icon={faTaxi} />
            <Text>Airport taxis</Text>
          </Box>
        </Flex>

        {type !== "list" && (
          <>
            <Flex direction="column">
              <Heading as="h1" fontSize="4xl" mb={"20px"}>
                A lifetime of discounts? It's Genius.
              </Heading>
              <Text fontSize="xl" mb={"20px"}>
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </Text>

              {!username && <Button w={"15%"}>Sign in/Register</Button>}

              <Flex
                direction="row"
                alignItems="center"
                bg="white"
                border="3px solid #febb02"
                borderRadius={5}
                p={"15px"}
                position="absolute"
                bottom={"-30px"}
                h={"60px"}
                maxW="1024px"
                width="100%"
                justifyContent="space-around">
                <Flex align="center" gap={2}>
                  <FontAwesomeIcon icon={faBed} color="lightgray" />
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    variant="unstyled"
                    color={"black"}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Flex>
                <Flex align="center" gap={2}>
                  <FontAwesomeIcon icon={faCalendarDays} color="lightgray" />
                  <Text
                    color="gray"
                    cursor="pointer"
                    onClick={() => {
                      setOpenDate(!openDate);
                    }}>
                    {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                      dates[0].endDate,
                      "dd/MM/yyyy"
                    )}`}
                  </Text>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </Flex>
                <Flex align="center" gap={2} zIndex={2}>
                  <FontAwesomeIcon icon={faPerson} color="lightgray" />
                  <Text
                    color="gray"
                    cursor="pointer"
                    onClick={() => setOpenOptions(!openOptions)}>
                    {`${options.adult} Adult · ${options.children} · Children · ${options.room} Room`}
                  </Text>
                  {openOptions && (
                    <VStack
                      h={"156px"}
                      w={"250px"}
                      position={"absolute"}
                      top={"72px"}
                      bg={"white"}
                      pt={"10px"}
                      borderRadius={"5px"}
                      color={"gray"}
                      boxShadow={"0px 0px 10px -5px rgba(0,0,0,0.4)"}>
                      <HStack maxW="210px" gap={"30px"}>
                        <Text color={"gray"}>Adult </Text>
                        <Box display={"flex"} gap={"10px"}>
                          <Button
                            {...inc}
                            border={"1px solid"}
                            onClick={() => handleOption("adult", "i")}>
                            +
                          </Button>
                          <Text padding={"0 15px"} color={"black"} mt={"6px"}>
                            {options.adult}
                          </Text>
                          <Button
                            {...dec}
                            border={"1px solid"}
                            onClick={() =>
                              options.adult >= 2 ? (
                                handleOption("adult", "d")
                              ) : (
                                <></>
                              )
                            }>
                            -
                          </Button>
                        </Box>
                      </HStack>
                      <HStack maxW="210px">
                        <Text color={"gray"}>Children</Text>
                        <Box display={"flex"} gap={"10px"}>
                          <Button
                            {...inc}
                            border={"1px solid"}
                            onClick={() => handleOption("children", "i")}>
                            +
                          </Button>
                          <Text padding={"0 15px"} color={"black"} mt={"6px"}>
                            {options.children}
                          </Text>
                          <Button
                            {...dec}
                            border={"1px solid"}
                            onClick={() =>
                              options.children >= 1 ? (
                                handleOption("children", "d")
                              ) : (
                                <></>
                              )
                            }>
                            -
                          </Button>
                        </Box>
                      </HStack>
                      <HStack maxW="210px" gap={"25px"}>
                        <Text color={"gray"}>Room</Text>
                        <Box display={"flex"} gap={"10px"}>
                          <Button
                            {...inc}
                            border={"1px solid"}
                            onClick={() => handleOption("room", "i")}>
                            +
                          </Button>
                          <Text padding={"0 15px"} color={"black"} mt={"6px"}>
                            {options.room}
                          </Text>
                          <Button
                            disabled={options.room <= 1}
                            {...dec}
                            border={"1px solid"}
                            onClick={() =>
                              options.room >= 2 ? (
                                handleOption("room", "d")
                              ) : (
                                <></>
                              )
                            }>
                            -
                          </Button>
                        </Box>
                      </HStack>
                    </VStack>
                  )}
                </Flex>
                <Flex align="center" gap={2}>
                  <Button bgColor="#ed64a6" onClick={handleSearch}>
                    Search
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
