import React from "react";
import { MainMenu } from "./components/MainMenu";
import { MainContent } from "./components/MainContent";

export const Main = () => {
  return (
    <main className="bg-transparent w-full">
      <div className="h-full flex ">
        <MainMenu />
        <MainContent />
      </div>
    </main>
  );
};
