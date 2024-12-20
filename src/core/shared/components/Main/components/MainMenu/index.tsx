import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Button, Flex, Menu } from "antd";

export const MainMenu = () => {
  const items = [
    { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
    { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
    { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
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
