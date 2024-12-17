"use client";
import { Input } from "antd";
import { useEffect, useState } from "react";

export const MainContent = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const textArr = text.split(" ");

  const [finder, setFinde] = useState("");
  const [kek, setKek] = useState<string | undefined>("");
  useEffect(() => {
    setKek(textArr.find((el) => el.includes(finder)));
  }, [finder]);

  return (
    <>
      <Input
        onChange={(val) => {
          setFinde(val.target.value);
        }}
      />
      {kek !== "" ? <div>{kek}</div> : null}
    </>
  );
};
