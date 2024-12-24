import {
  PoweroffOutlined,
  RadarChartOutlined,
  TeamOutlined,
  UserOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Button, Flex, Menu } from "antd";
import Link from "next/link";

export const MainMenu = () => {
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link href={"/account/profile"}>Моя страница</Link>,
    },
    {
      key: "2",
      icon: <TeamOutlined />,
      label: <Link href={"/account/friends"}>Друзья</Link>,
    },
    {
      key: "3",
      icon: <RadarChartOutlined />,
      label: <Link href={"/"}>Фича</Link>,
    },
    {
      key: "4",
      icon: <WomanOutlined />,
      label: <Link href={"/account/settings"}>Настройки</Link>,
    },
  ];
  return (
    <Flex justify="space-between" vertical style={{ height: "90%" }}>
      <Menu
        className="zalopa"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        style={{
          borderInlineEnd: "unset",
        }}
      />
      <Button icon={<PoweroffOutlined />}>Выйти</Button>
    </Flex>
  );
};
