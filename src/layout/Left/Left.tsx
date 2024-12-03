/** @format */

import { Box, Heading, Text } from "@chakra-ui/react";
import { AOS } from "@/components/features";

export const Left = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      flex={1}
      h="100vh"
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      style={{
        backdropFilter: "blur(3px)",
        borderRight: "5px solid rgba(128, 128, 128, 0.3)",
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.6)"
        zIndex={0}
      />

      <Box position="relative" zIndex={2} h="100%" w="100%">
        <Box px={10} py={12}>
          <AOS direction="down" delay={200}>
            <Heading
              as="h2"
              fontSize="lg"
              fontFamily="sans-serif"
              mb={4}
              letterSpacing={1}
            >
              WEDDING ANNOUNCEMENT
            </Heading>
          </AOS>

          <AOS direction="left">
            <Text
              fontSize="7xl"
              textTransform="uppercase"
              fontFamily="serif"
              lineHeight={1}
              mb={4}
            >
              Tiffany & <br /> Jared
            </Text>
          </AOS>

          <AOS direction="right">
            <Text fontStyle="italic" pr={24} fontWeight={400}>
              &quot;Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada.&quot;
            </Text>

            <Text fontSize="sm" mt={2} fontStyle="italic">
              - Sapardi Djoko Damono
            </Text>
          </AOS>
        </Box>
      </Box>
    </Box>
  );
};
