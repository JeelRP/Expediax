import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Box, Button, Heading, Img, Text, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import MailList from "../Components/MailList";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import Reserve from "../Components/Reserve";
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const toast = useToast();
  const { dates, options } = useContext(SearchContext);
  const navigate = useNavigate();
  const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dateDifference(date1, date2) {
    const timeDiff = Math.abs(date1.getTime() - date2.getTime());
    const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
    return diffDays;
  }
  const day = dateDifference(dates[0].endDate, dates[0].startDate);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const [username, setUsername] = useState("");
  const [openModal, setOpenModal] = useState(false);
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
  const handleClick = () => {
    if (username) {
      setOpenModal(true);
    } else {
      toast({
        title: "Please Login ",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate("/");
    }
  };
  return (
    <Box>
      <Navbar />
      <Header type="list" />

      {loading ? (
        "laoding"
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={"20px"}
          className="hotelContainer">
          {open && (
            <Box className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                // onClick={() => handleMove("l")}
              />
              <Box className="sliderWrapper">
                <Img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </Box>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" />
            </Box>
          )}
          <Box
            className="hotelWrapper"
            w={"100%"}
            maxW={"1024px"}
            display={"flex"}
            flexDirection={"column"}
            pos={"relative"}
            gap={"10px"}
            m={"auto"} // extra property bcs w and maxw can't apply
          >
            <Button
              className="bookNow"
              pos={"absolute"}
              top={"10px"}
              right={"0"}
              bgColor={"#ed64a6"}
              colorScheme="teal"
              fontWeight={"bold"}
              onClick={handleClick}>
              Reserve or Book Now!
            </Button>
            <Heading as={"h1"} className="hotelTitle" fontSize={"24px"}>
              {data.name}
            </Heading>
            <Box
              className="hotelAddress"
              fontSize={"12px"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}>
              <FontAwesomeIcon icon={faLocationDot} />
              <Text>{data.address}</Text>
            </Box>
            <Text
              className="hotelDistance"
              color={"#ed64a6"}
              fontWeight={"500"}>
              Excellent location – {data.distance}m from center
            </Text>
            <Text
              className="hotelPriceHighlight"
              color={"#0071c2"}
              fontWeight={"500"}>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </Text>
            <Box
              className="hotelImages"
              display={"flex"}
              gap={"5px"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}>
              {data.photos?.map((photo, i) => (
                <Box className="hotelImgWrapper" w={"33%"}>
                  <Img
                    onClick={handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                    w={"100%"}
                    h={"150px"}
                    objectFit={"cover"}
                  />
                </Box>
              ))}
            </Box>
            <Box
              className="hotelDetails"
              display={"flex"}
              justifyContent={"space-between"}
              gap={"20px"}
              mt={"20px"}>
              <Box className="hotelDetailsTexts" flex={3}>
                <Heading as={"h1"} className="hotelTitle">
                  {data.title}
                </Heading>
                <Heading
                  as={"p"}
                  fontSize={"14px"}
                  mt={"20px"}
                  fontWeight={"400"}
                  className="hotelDesc">
                  {data.desc}
                </Heading>
              </Box>
              <Box
                className="hotelDetailsPrice"
                flex={1}
                bgColor={"#ebf3ff"}
                display={"flex"}
                flexDirection={"column"}
                p={"20px"}
                gap={"10px"}>
                <Heading as={"h1"} fontSize={"18px"} color={"#555"}>
                  Perfect for a {day}-night stay!
                </Heading>
                <Text fontSize={"14px"}>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </Text>
                <Heading as={"h4"} fontSize={"2xl"} fontWeight={"300"}>
                  <b>${day * data.cheapestPrice * options.room}</b> ({day}
                  nights)
                </Heading>
                <Button
                  bgColor={"#ed64a6"}
                  colorScheme="teal"
                  fontWeight={"bold"}
                  onClick={handleClick}>
                  Reserve or Book Now!
                </Button>
              </Box>
            </Box>
          </Box>
          <MailList />
          <Footer />
        </Box>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </Box>
  );
};

export default Hotel;

// import React, { useState } from "react";
// import Navbar from "../Components/Navbar";
// import Header from "../Components/Header";
// import { Box, Button, Heading, Img, Text, Grid } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
//   faCircleXmark,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
// import Footer from "../Components/Footer";
// import MailList from "../Components/MailList";

// const Hotel = () => {
//   const [slideNumber, setSlideNumber] = useState(0);
//   const [open, setOpen] = useState(false);

//   const photos = [
//     {
//       src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
//     },
//     // ...rest of the photos
//   ];

//   const handleOpen = (i) => {
//     setSlideNumber(i);
//     setOpen(true);
//   };

//   return (
//     <Box>
//       <Navbar />
//       <Header type="list" />

//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         mt="20px"
//         className="hotelContainer">
//         {open && <Box>jknknjn</Box>}
//         <Box
//           className="hotelWrapper"
//           w="100%"
//           maxW="1024px"
//           display="flex"
//           flexDirection="column"
//           pos="relative"
//           gap="10px"
//           m="auto"
//           px={[4, 8, 12]} // Added responsive padding on x-axis
//         >
//           <Button
//             className="bookNow"
//             pos="absolute"
//             top="10px"
//             right="0"
//             bgColor="#ed64a6"
//             colorScheme="teal"
//             fontWeight="bold">
//             Reserve or Book Now!
//           </Button>
//           <Heading
//             as="h1"
//             className="hotelTitle"
//             fontSize={["xl", "2xl", "3xl"]}>
//             Grand Hotel
//           </Heading>
//           <Box
//             className="hotelAddress"
//             fontSize="12px"
//             display="flex"
//             alignItems="center"
//             gap="10px">
//             <FontAwesomeIcon icon={faLocationDot} />
//             <Text>Elton St 125 New York </Text>
//           </Box>
//           <Text className="hotelDistance" color="#ed64a6" fontWeight="500">
//             Excellent location – 500m from center
//           </Text>
//           <Text
//             className="hotelPriceHighlight"
//             color="#0071c2"
//             fontWeight="500">
//             Book a stay over $114 at this property and get a free airport taxi
//           </Text>
//           <Grid
//             className="hotelImages"
//             templateColumns={[
//               "repeat(2, 1fr)",
//               "repeat(3, 1fr)",
//               "repeat(6, 1fr)",
//             ]}
//             gap="5px"
//             justifyContent="space-between"
//             mt="20px">
//             {photos.map((photo, i) => (
//               <Box key={i} className="hotelImgWrapper">
//                 <Img
//                   onClick={() => handleOpen(i)}
//                   src={photo.src}
//                   alt=""
//                   className="hotelImg"
//                   w="100%"
//                   h="150px"
//                   objectFit="cover"
//                 />
//               </Box>
//             ))}
//           </Grid>
//           <Grid
//             className="hotelDetails"
//             templateColumns={["1fr", "1fr", "3fr 2fr"]}
//             gap="20px"
//             mt="20px">
//             <Box className="hotelDetailsTexts">
//               <Heading as="h1" className="hotelTitle">
//                 Stay in the heart of Krakow
//               </Heading>
//               <Text
//                 as="p"
//                 fontSize="14px"
//                 mt="20px"
//                 fontWeight="400"
//                 className="hotelDesc">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Praesentium aliquid rem expedita enim sequi tempora harum quam
//                 magni eos, maiores nihil? Ipsam, optio nostrum. Nam enim ad
//                 maxime blanditiis illo. Lorem ipsum dolor sit amet consectetur,
//                 adipisicing elit. Nostrum, totam. Fugiat voluptatem velit ipsum
//                 illum, quis voluptates? Culpa, illum! Totam magnam possimus
//                 vitae autem repellendus eligendi aliquam esse aspernatur ut.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
//                 facilis debitis nesciunt maxime distinctio incidunt est sint
//                 ratione illum saepe. Cupiditate amet eum autem qui expedita
//                 libero, voluptatum exercitationem voluptatibus?
//               </Text>
//             </Box>
//             <Box
//               className="hotelDetailsPrice"
//               bgColor="#ebf3ff"
//               display="flex"
//               flexDirection="column"
//               p="20px"
//               gap="10px">
//               <Heading as="h1" fontSize="18px" color="#555">
//                 Perfect for a 9-night stay!
//               </Heading>
//               <Text fontSize="14px">
//                 Located in the real heart of Krakow, this property has an
//                 excellent location score of 9.8!
//               </Text>
//               <Heading as="h2" fontWeight="300">
//                 <b>$945</b> (9 nights)
//               </Heading>
//               <Button bgColor="#ed64a6" colorScheme="teal" fontWeight="bold">
//                 Reserve or Book Now!
//               </Button>
//             </Box>
//           </Grid>
//         </Box>
//         <MailList />
//         <Footer />
//       </Box>
//     </Box>
//   );
// };

// export default Hotel;
