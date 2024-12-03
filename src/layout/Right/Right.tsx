/** @format */

import { Box } from "@chakra-ui/react";
import { Hero, Opening, Slideshow } from "@/section";
import { useSpring, animated } from "@react-spring/web";
import { useAppContext } from "@/context/AppContext";

const AnimatedBox = animated(Box);

export const Right = () => {
  const { isInvitationOpen } = useAppContext();

  const slideIn = useSpring({
    opacity: isInvitationOpen ? 1 : 0,
    transform: isInvitationOpen ? "translateY(0px)" : "translateY(100px)",
    display: isInvitationOpen ? "block" : "none",
    config: { tension: 280, friction: 60 },
  });

  return (
    <Box maxW="500px" bg="gray.100" h="100vh" position="relative">
      <Hero />

      <AnimatedBox style={slideIn} overflowY="auto" overflowX="hidden" height="100vh" width="100%">
        <Slideshow />
        <Opening/>
      </AnimatedBox>
    </Box>
  );
};
