import React, { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import {
  Box,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../Components/SearchItem";
import useFetch from "../hooks/useFetch";

const List = () => {
  const location = useLocation();
  // console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <Box>
      <Navbar />
      <Header type="list" />
      <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
        <Box w={"100%"} maxW={"1024px"} display={"flex"} gap={"20px"}>
          <Box
            flex={"1"}
            bg={"#febb02"}
            padding={"10px"}
            borderRadius={"10px"}
            position={"sticky"}
            h={"max-content"}>
            <Heading as={"h1"} fontSize={"20px"} color={"#555"} mb={"10px"}>
              Search
            </Heading>
            <Box>
              <FormLabel>Destination</FormLabel>
              <Input
                height={"45px"}
                bgColor={"white"}
                placeholder={destination}
              />
            </Box>
            <Box>
              <FormLabel mt={"10px"}>Check-in Date</FormLabel>
              <Text
                height={"45px"}
                bgColor={"white"}
                display={"flex"}
                alignItems={"center"}
                pl={"10px"}
                borderRadius={"6px"}
                cursor={"pointer"}
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
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </Box>
            <Box className="lsItem" mt={"15px"}>
              <Text fontSize="xl" fontWeight="bold">
                Options
              </Text>
              <Flex
                className="lsOptions"
                direction="column"
                mt={"10px"}
                gap={"10px"}>
                <Flex
                  fontSize={"20px"}
                  className="lsOptionItem"
                  alignItems="center"
                  justifyContent={"space-between"}>
                  <Text className="lsOptionText" fontSize={"18px"}>
                    Min price <Text as="small">per night</Text>
                  </Text>
                  <NumberInput bgColor={"white"} size="sm" maxW={16} min={0}>
                    <NumberInputField
                      onChange={(e) => setMin(e.target.value)}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
                <Flex
                  fontSize={"20px"}
                  className="lsOptionItem"
                  alignItems="center"
                  justifyContent={"space-between"}>
                  <Text className="lsOptionText" fontSize={"18px"}>
                    Max price <Text as="small">per night</Text>
                  </Text>

                  <NumberInput bgColor={"white"} size="sm" maxW={16} min={0}>
                    <NumberInputField
                      onChange={(e) => setMax(e.target.value)}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
                <Flex
                  className="lsOptionItem"
                  alignItems="center"
                  justifyContent={"space-between"}>
                  <Text className="lsOptionText" fontSize={""}>
                    Adult
                  </Text>

                  <NumberInput bgColor={"white"} size="sm" maxW={16} min={0}>
                    <NumberInputField placeholder={options.adult} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
                <Flex
                  className="lsOptionItem"
                  alignItems="center"
                  justifyContent={"space-between"}>
                  <Text className="lsOptionText" fontSize={""}>
                    Children
                  </Text>

                  <NumberInput bgColor={"white"} size="sm" maxW={16} min={0}>
                    <NumberInputField placeholder={options.children} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
                <Flex
                  className="lsOptionItem"
                  alignItems="center"
                  justifyContent={"space-between"}>
                  <Text className="lsOptionText" fontSize={""}>
                    Room
                  </Text>
                  <NumberInput bgColor={"white"} size="sm" maxW={16} min={0}>
                    <NumberInputField placeholder={options.room} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </Flex>
            </Box>
            <Button
              p={"10px"}
              colorScheme={"telegram"}
              w={"100%"}
              mt={"15px"}
              fontWeight={"600"}
              onClick={handleClick}>
              Search
            </Button>
          </Box>
          <Box flex={"3"}>
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default List;

// import React, { useState } from "react";
// import Header from "../Components/Header";
// import Navbar from "../Components/Navbar";
// import {
//   Box,
//   Flex,
//   FormLabel,
//   Heading,
//   Input,
//   Text,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Button,
// } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
// import SearchItem from "../Components/SearchItem";

// const List = () => {
//   const location = useLocation();

//   const [destination, setDestination] = useState(location.state.destination);
//   const [date, setDate] = useState(location.state.date);
//   const [options, setOptions] = useState(location.state.options);
//   const [openDate, setOpenDate] = useState(false);

//   return (
//     <Box>
//       <Navbar />
//       <Header type="list" />
//       <Box display="flex" justifyContent="center" mt="20px">
//         <Box
//           w="100%"
//           maxW="1024px"
//           display="flex"
//           flexDir={["column", "row"]}
//           gap="20px">
//           <Box
//             flex="1"
//             bg="#febb02"
//             padding="10px"
//             borderRadius="10px"
//             position="sticky"
//             top="20px"
//             h="max-content">
//             <Heading as="h1" fontSize="20px" color="#555" mb="10px">
//               Search
//             </Heading>
//             <Box>
//               <FormLabel>Destination</FormLabel>
//               <Input height="45px" bgColor="white" placeholder={destination} />
//             </Box>
//             <Box mt="10px">
//               <FormLabel>Check-in Date</FormLabel>
//               <Text
//                 height="45px"
//                 bgColor="white"
//                 display="flex"
//                 alignItems="center"
//                 pl="10px"
//                 borderRadius="6px"
//                 cursor="pointer"
//                 onClick={() => {
//                   setOpenDate(!openDate);
//                 }}>
//                 {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
//                   date[0].endDate,
//                   "dd/MM/yyyy"
//                 )}`}
//               </Text>
//               {openDate && (
//                 <DateRange
//                   onChange={(item) => setDate([item.selection])}
//                   minDate={new Date()}
//                   ranges={date}
//                 />
//               )}
//             </Box>
//             <Box className="lsItem" mt="15px">
//               <Text fontSize="xl" fontWeight="bold">
//                 Options
//               </Text>
//               <Flex
//                 className="lsOptions"
//                 direction="column"
//                 mt="10px"
//                 gap="10px">
//                 <Flex
//                   fontSize="20px"
//                   className="lsOptionItem"
//                   alignItems="center"
//                   justifyContent="space-between">
//                   <Text className="lsOptionText" fontSize="18px">
//                     Min price <Text as="small">per night</Text>
//                   </Text>
//                   <NumberInput bgColor="white" size="sm" maxW={16} min={0}>
//                     <NumberInputField />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </Flex>
//                 <Flex
//                   fontSize="20px"
//                   className="lsOptionItem"
//                   alignItems="center"
//                   justifyContent="space-between">
//                   <Text className="lsOptionText" fontSize="18px">
//                     Max price <Text as="small">per night</Text>
//                   </Text>

//                   <NumberInput bgColor="white" size="sm" maxW={16} min={0}>
//                     <NumberInputField />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </Flex>
//                 <Flex
//                   className="lsOptionItem"
//                   alignItems="center"
//                   justifyContent="space-between">
//                   <Text className="lsOptionText">Adult</Text>

//                   <NumberInput bgColor="white" size="sm" maxW={16} min={0}>
//                     <NumberInputField placeholder={options.adult} />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </Flex>
//                 <Flex
//                   className="lsOptionItem"
//                   alignItems="center"
//                   justifyContent="space-between">
//                   <Text className="lsOptionText">Children</Text>

//                   <NumberInput bgColor="white" size="sm" maxW={16} min={0}>
//                     <NumberInputField placeholder={options.children} />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </Flex>
//                 <Flex
//                   className="lsOptionItem"
//                   alignItems="center"
//                   justifyContent="space-between">
//                   <Text className="lsOptionText">Room</Text>
//                   <NumberInput bgColor="white" size="sm" maxW={16} min={0}>
//                     <NumberInputField placeholder={options.room} />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </Flex>
//               </Flex>
//             </Box>
//             <Button
//               p="10px"
//               colorScheme="telegram"
//               w="100%"
//               mt="15px"
//               fontWeight="600">
//               Search
//             </Button>
//           </Box>
//           <Box flex="3">
//             <SearchItem />
//             <SearchItem />
//             <SearchItem />
//             <SearchItem />
//             <SearchItem />
//             <SearchItem />
//             <SearchItem />
//             <SearchItem />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default List;
