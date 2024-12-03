/** @format */

import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const AnimatedBox = animated(Box);

export const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const zoomIn = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.05)" },
    config: {
      duration: 8000,
    },
    loop: { reverse: true },
  });

  const transitions = useTransition(currentImageIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 2000,
      tension: 120,
      friction: 14,
    },
  });

  return (
    <Box p={8} h="100vh" maxW="500px" position="relative" overflow="hidden">
      {transitions((fadeStyle: any, index: any) => (
        <AnimatedBox
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={`url('${images[index]}')`}
          backgroundSize="cover"
          backgroundPosition="center"
          filter="brightness(0.6)"
          zIndex={0}
          style={{
            ...fadeStyle,
            ...zoomIn,
          }}
        />
      ))}

      <Flex
        position="relative"
        zIndex={1}
        height="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Heading
          as="h2"
          fontSize="xl"
          fontFamily="sans-serif"
          textTransform="uppercase"
          letterSpacing={1}
          textAlign="center"
          width="90%"
          zIndex={1}
          mt={"12"}
          mb={"48"}
        >
          WEDDING ANNOUNCEMENT
        </Heading>

        <Flex
          mb={20}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          zIndex={1}
        >
          <Text
            textTransform="uppercase"
            fontSize="4xl"
            fontWeight={400}
            fontFamily="serif"
          >
            Tiffany & Jared
          </Text>
          <Text
            fontSize="4xl"
            fontFamily="serif"
            fontWeight={400}
            fontStyle="italic"
          >
            #TImetoshaRE
          </Text>
        </Flex>
      </Flex>

      <Link
        href="#opening"
        position="absolute"
        bottom={8}
        right={8}
        display="flex"
        alignItems="center"
        color="white"
        _hover={{ textDecoration: "none", transform: "translateY(2px)" }}
        transition="transform 0.2s"
        cursor="pointer"
        zIndex={4}
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#opening")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Text fontWeight={550} fontSize="sm" textTransform="uppercase" mr={1}>
          SCROLL TO BEGIN
        </Text>
        <BiChevronDown size={24} />
      </Link>
    </Box>
  );
};
