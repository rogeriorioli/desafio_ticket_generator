"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface UserContextType {
  user: UserProfile;
  updateUser: (newUser: UserProfile) => void;
}

interface UserProfile {
  name: string;
  avatar_url: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile>({
    name: "Seu Nome Aqui querido dev",
    avatar_url: "/Assets/foto.png",
  });

  const updateUser = (newUser: UserProfile) => {
    setUser(newUser);
  };

  const contextValue: UserContextType = {
    user,
    updateUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
