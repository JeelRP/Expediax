import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetch";

const Property = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  return (
    <Box
      mt={"15px"}
      w={"100%"}
      maxW={"1024px"}
      display={"flex"}
      justifyContent={"space-between"}
      gap={"20px"}>
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <Box
                flex={"1"}
                borderRadius={"10px"}
                overflow={"hidden"}
                cursor={"pointer"}
              key={i}>
                <Image
                  height={"150px"}
                  objectFit={"cover"}
                  w={"100%"}
                  alt="Image not Found"
                  src={img}
                />
                <Heading as="h1" fontSize={"18px"} textTransform={"uppercase"}>
                  {data[i]?.type}
                </Heading>
                <Heading as="h2" fontSize={"14px"} fontWeight={"400"}>
                  {data[i]?.count} {data[i]?.type}
                </Heading>
              </Box>
            ))}
        </>
      )}
    </Box>
  );
};

export default Property
