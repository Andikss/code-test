/** @format */

import { Box, Heading, Text } from "@chakra-ui/react";
import { Carousel, AOS } from "@/components/features";

export const Opening = () => {
  const images = [
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372",
  ];

  return (
    <Box id="opening" minH="100vh" maxW="1200px" py={12} mx="auto">
      <Box px={6}>
        <AOS delay={100}>
          <Heading
            mb={8}
            textTransform="uppercase"
            lineHeight={1.2}
            fontWeight={800}
            letterSpacing={1}
            fontSize="xs"
            textAlign="center"
            color="gray.700"
          >
            Dear Mr-Mrs-Ms, <br />
            Family & Friends
          </Heading>
        </AOS>

        <AOS delay={300}>
          <Heading
            mb={8}
            color="gray.700"
            fontWeight={550}
            fontSize="3xl"
            lineHeight={1.3}
            textAlign="center"
            fontFamily="serif"
          >
            Welcome to <br /> Tiffany & Jared`s <br /> Wedding Website
          </Heading>
        </AOS>

        <AOS delay={500}>
          <Text
            mb={8}
            fontStyle="italic"
            color="gray.700"
            textAlign="center"
            fontWeight={300}
            fontFamily="serif"
          >
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </Text>
        </AOS>
      </Box>

      <AOS delay={700}>
        <Carousel images={images} />
      </AOS>
    </Box>
  );
};
