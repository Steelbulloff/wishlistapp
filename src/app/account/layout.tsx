import { Main } from "@/core/shared/components/Main";
import { MainMenu } from "@/core/shared/components/Main/components/MainMenu";
import { Flex } from "antd";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-transparent w-full">
      <Flex style={{ height: "100%" }}>
        <MainMenu />
        {children}
      </Flex>
    </main>
  );
}
