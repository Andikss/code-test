/** @format */

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Image, Button, HStack } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

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
    <Box position="relative" h="540px">
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Thumbnails]}
      />

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
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.02)" }}
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

      <HStack position="absolute" bottom="4" right="4" gap={2}>
        <Button
          onClick={scrollPrev}
          size="lg"
          bg="#997A5E"
          _hover={{ bg: "#876A51" }}
          _active={{ bg: "#755C46" }}
          w="60px"
          h="30px"
          color="white"
        >
          <MdChevronLeft size={32} />
        </Button>
        <Button
          onClick={scrollNext}
          size="lg"
          bg="#997A5E"
          _hover={{ bg: "#876A51" }}
          _active={{ bg: "#755C46" }}
          w="60px"
          h="30px"
          color="white"
        >
          <MdChevronRight size={32} />
        </Button>
      </HStack>
    </Box>
  );
};
