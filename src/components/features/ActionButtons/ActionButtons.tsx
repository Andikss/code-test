/** @format */

"use client";

import { Flex, IconButton } from "@chakra-ui/react";
import { Menu } from "@/components/features/Menu";
import {
  RiMenu3Line,
  RiMusicFill,
  RiCloseLine,
  RiMusicLine,
} from "react-icons/ri";
import { useAppContext } from "@/context/AppContext";

export const ActionButtons = () => {
  const {
    isInvitationOpen,
    isMenuOpen,
    setMenuOpen,
    isMuted,
    setIsMuted,
    audioRef,
  } = useAppContext();

  const handleMuteToggle = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <Menu />

      {isInvitationOpen && (
        <Flex gap="3" position="absolute" bottom="4" left="4">
          <IconButton
            aria-label="Open menu"
            rounded="full"
            size="lg"
            colorScheme="gray"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </IconButton>

          <IconButton
            aria-label="Toggle music"
            rounded="full"
            size="lg"
            colorScheme="gray"
            onClick={handleMuteToggle}
          >
            {isMuted ? <RiMusicLine size={24} /> : <RiMusicFill size={24} />}
          </IconButton>
        </Flex>
      )}
    </>
  );
};
