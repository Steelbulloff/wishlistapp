import React from "react";
import { MainMenu } from "./components/MainMenu";
import { Flex } from "antd";
import { MainContentRouter } from "../../Router/Router";

export const Main = () => {
  return (
    <main className="bg-transparent w-full">
      <Flex style={{ height: "100%" }}>
        <MainMenu />
        <MainContentRouter />
      </Flex>
    </main>
  );
};
