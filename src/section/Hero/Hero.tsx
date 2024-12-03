/** @format */

import { useAppContext } from "@/context/AppContext";
import { Heading, Button, Box, Text, Flex, Spinner } from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const AnimatedBox = animated(Box);

export const Hero = () => {
  const { isInvitationOpen, setInvitationOpen, isMuted, audioRef } =
    useAppContext();

  const fadeOut = useSpring({
    opacity: isInvitationOpen ? 0 : 1,
    display: isInvitationOpen ? "none" : "flex",
    config: { duration: 300 },
  });

  const [isLoading, setIsLoading] = useState(false);

  const buttonAnimation = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (!isLoading) {
        await next({ scale: 1.05 });
        await next({ scale: 1 });
      }
    },
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const handleClick = async () => {
    setIsLoading(true);
    if (audioRef.current && !isMuted) {
      audioRef.current.loop = true;
      audioRef.current.play().catch(console.error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setInvitationOpen(true);
  };

  return (
    <AnimatedBox
      style={fadeOut}
      position="relative"
      height="100vh"
      width="500px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.6)"
        zIndex={0}
      />
      <Heading
        as="h2"
        fontSize="xl"
        fontFamily="sans-serif"
        textTransform="uppercase"
        width={{ base: "100vw", sm: "500px" }}
        letterSpacing={1}
        textAlign="center"
        zIndex={1}
        mt={"24"}
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
        width={{ base: "100vw", sm: "500px" }}
      >
        <Text
          textTransform="uppercase"
          fontSize="4xl"
          fontWeight={400}
          fontFamily="serif"
          textAlign="center"
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

      <animated.div style={buttonAnimation}>
        <Button
          px={12}
          py={4}
          bg="rgba(255, 255, 255, 0.85)"
          backdropFilter="blur(12px)"
          color="gray.700"
          fontSize="xl"
          fontWeight="400"
          letterSpacing="0.1em"
          fontFamily="serif"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
          border="1px solid rgba(255, 255, 255, 0.3)"
          _hover={{
            bg: "rgba(255, 255, 255, 0.95) !important",
            boxShadow: "0 6px 25px rgba(0, 0, 0, 0.12) !important",
            transform: "translateY(-2px) !important",
          }}
          _active={{
            bg: "rgba(255, 255, 255, 1) !important",
            transform: "translateY(0) !important",
          }}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? <Spinner color="gray.700" /> : "Open"}
        </Button>
      </animated.div>
    </AnimatedBox>
  );
};
