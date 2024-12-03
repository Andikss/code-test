/** @format */

"use client";

import { Left, Right } from "@/layout";
import { Flex } from "@chakra-ui/react";
import { ActionButtons } from "@/components/features";
import { AppProvider } from "@/context/AppContext";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <AppProvider>
      <Flex
        h="100vh"
        overflow="hidden"
        justifyContent="center"
        bg="gray.100"
        position="relative"
      >
        <Left />
        <Right />
        <ActionButtons />
      </Flex>
    </AppProvider>
  );
};

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
