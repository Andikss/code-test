/** @format */

import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerCloseTrigger,
} from "@/components/ui/drawer";
import { useAppContext } from "@/context/AppContext";
import { VStack, Text, Link, Box, Flex } from "@chakra-ui/react";

export const Menu: React.FC = () => {
  const { isMenuOpen, setMenuOpen } = useAppContext();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <DrawerRoot
      size="md"
      placement="end"
      open={isMenuOpen}
      onOpenChange={(details) => setMenuOpen(details.open)}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger position="absolute" top={4} right={4} />

        <Flex
          flexDirection="column"
          alignItems="right"
          p={8}
          pt={24}
          h="full"
          color="gray.700"
        >
          <Text
            fontSize="3xl"
            fontStyle="italic"
            mb={12}
            fontFamily="serif"
            textAlign="right"
          >
            #TImetoshaRE
          </Text>

          <VStack gap={8} w="full" maxW="md">
            <Link
              href="#opening"
              onClick={(e) => handleClick(e, "#opening")}
              w="full"
              display="flex"
              justifyContent="flex-end"
              fontFamily="serif"
              py={3}
              borderBottom="1px solid gray"
            >
              BRIDE & GROOM
            </Link>
            <Link
              href="#opening"
              onClick={(e) => handleClick(e, "#opening")}
              w="full"
              display="flex"
              justifyContent="flex-end"
              fontFamily="serif"
              py={3}
              borderBottom="1px solid gray"
            >
              LIVE STREAMING
            </Link>
            <Link
              href="#opening"
              onClick={(e) => handleClick(e, "#opening")}
              w="full"
              display="flex"
              justifyContent="flex-end"
              fontFamily="serif"
              py={3}
              borderBottom="1px solid gray"
            >
              WEDDING GIFT
            </Link>
          </VStack>

          <Box position="absolute" bottom={8} right={8} textAlign="center">
            <Text fontSize="xs" color="gray.600">
              Created with Love by Invitato
            </Text>
            <Text fontSize="xs" color="gray.600">
              2024 Tiffany & Jared. All Rights Reserved
            </Text>
          </Box>
        </Flex>
      </DrawerContent>
    </DrawerRoot>
  );
};
