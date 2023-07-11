import { Box, Button, Checkbox, Input, Text } from "@chakra-ui/react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { SearchContext } from "../context/SearchContext";
import { getDate } from "date-fns";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
   const [selectedRooms, setSelectedRooms] = useState([]);
   const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
   const { dates } = useContext(SearchContext);

   const getDatesInRange = (startDate, endDate) => {
     const start = new Date(startDate);
     const end = new Date(endDate);

     const date = new Date(start.getTime());

     const dates = [];

     while (date <= end) {
       dates.push(new Date(date).getTime());
       date.setDate(date.getDate() + 1);
     }

     return dates;
   };

   const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

   const isAvailable = (roomNumber) => {
     const isFound = roomNumber.unavailableDates.some((date) =>
       alldates.includes(new Date(date).getTime())
     );

     return !isFound;
   };

   const handleSelect = (e) => {
     const checked = e.target.checked;
     const value = e.target.value;
     setSelectedRooms(
       checked
         ? [...selectedRooms, value]
         : selectedRooms.filter((item) => item !== value)
     );
   };

   const navigate = useNavigate();

   const handleClick = async () => {
     try {
       await Promise.all(
         selectedRooms.map((roomId) => {
           const res = axios.put(`/rooms/availability/${roomId}`, {
             dates: alldates,
           });
           return res.data;
         })
       );
       setOpen(false);
       navigate("/");
     } catch (err) {}
   };
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      bg="rgba(0, 0, 0, 0.418)"
      pos={"fixed"}
      top={"0"}
      left={"0"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Box bgColor={"white"} p={"20px"} pos={"relative"}>
        <FontAwesomeIcon
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            cursor: "pointer",
          }}
          icon={faCircleXmark}
          onClick={() => setOpen(false)}
        />
        <Text>Select Your Rooms</Text>
        {data.map((item) => (
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"70px"}
            padding={"10px"}>
            <Box display={"flex"} flexDir={"column"} gap={"0px"}>
              <Box fontWeight={500}>{item.title}</Box>
              <Box fontWeight={300}>{item.desc}</Box>
              <Box fontWeight={"12px"}>
                Max People: <b>{item.maxPeople}</b>
              </Box>
              <Box fontWeight={500}>{item.price}</Box>
            </Box>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              gap={"5px"}
              fontSize={"12px"}
              color={"gray"}>
              {item.roomNumbers.map((roomNumber) => (
                <Box display={"flex"} flexDirection={"column"}>
                  <Box>{roomNumber.number}</Box>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={(e)=>handleSelect(e)}
                    disabled={!isAvailable(roomNumber)}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}

        <Button
          border={"none"}
          p={"10px 20px"}
          bgColor={"#007c12"}
          color={"white"}
          fontWeight={"bold"}
          cursor={"pointer"}
          borderRadius={"5px"}
          w={"100%"}
          mt={"20px"}
          onClick={handleClick}>
          Reserve Now
        </Button>
      </Box>
    </Box>
  );
};

export default Reserve;
