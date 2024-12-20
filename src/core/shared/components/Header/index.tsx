import {
  AlertOutlined,
  TwitterOutlined,
  UserOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Flex, Typography } from "antd";
export const Header = () => {
  return (
    <header className="header">
      <Flex justify="space-around" align="center">
        <Typography>Logotipe Zaloppa</Typography>

        <Typography>Заглушка для фичи</Typography>

        <Flex justify="space-between" gap={50}>
          <Flex gap={30}>
            <WhatsAppOutlined />
            <TwitterOutlined />
            <YoutubeOutlined />
          </Flex>

          <Flex gap={30}>
            <AlertOutlined />
            <Flex align="center">
              <UserOutlined />
              <Typography>Профиль</Typography>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};
export default Header;
