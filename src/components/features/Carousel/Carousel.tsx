/** @format */

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Image, Button, HStack } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Box position="relative">
      <Box w="100%" maxW="900px" mx="auto" overflow="hidden" mb={4}>
        <Box ref={emblaRef} className="embla" mb={10}>
          <Box
            display="flex"
            gap="8px"
            style={{ backfaceVisibility: "hidden" }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                flex="0 0 80%"
                minWidth="0"
                position="relative"
                padding="0 4px"
                className={`embla__slide ${
                  index === selectedIndex ? "carousel_selected" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  w="100%"
                  h="400px"
                  objectFit="cover"
                  draggable={false}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <HStack
        gap={2}
        justifyContent="end"
      >
        <Button
          onClick={scrollPrev}
          size="sm"
          colorScheme="blackAlpha"
          rounded="full"
        >
          <MdChevronLeft size={20} />
        </Button>
        <Button
          onClick={scrollNext}
          size="sm"
          colorScheme="blackAlpha"
          rounded="full"
        >
          <MdChevronRight size={20} />
        </Button>
      </HStack>
    </Box>
  );
};
