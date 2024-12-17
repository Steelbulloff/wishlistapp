import React from "react";
import { MainMenu } from "./components/MainMenu";
import { MainContent } from "./components/MainContent";

export const Main = () => {
  return (
    <main className="bg-black">
      <MainMenu />
      <MainContent />
    </main>
  );
};
