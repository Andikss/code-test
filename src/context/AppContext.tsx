/** @format */

import React, { createContext, useState, useContext, useRef } from "react";

interface AppContextType {
  isInvitationOpen: boolean;
  setInvitationOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isInvitationOpen, setInvitationOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio('/assets/sound.mp3'));

  const value = {
    isInvitationOpen,
    setInvitationOpen,
    isMenuOpen,
    setMenuOpen,
    isMuted,
    setIsMuted,
    audioRef,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
