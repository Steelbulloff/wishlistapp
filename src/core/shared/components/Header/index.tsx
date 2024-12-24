import {
  AlertOutlined,
  TwitterOutlined,
  UserOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Flex, Image, Typography } from "antd";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="header">
      <Flex justify="space-around" align="center">
        <Link href="/">
          <Image
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            preview={false}
            height={32}
          />
        </Link>

        <Button>Заглушка для фичи</Button>

        <Flex justify="space-between" gap={50}>
          <Flex gap={30}>
            <Button icon={<WhatsAppOutlined />} />
            <Button icon={<TwitterOutlined />} />
            <Button icon={<YoutubeOutlined />} />
          </Flex>

          <Flex gap={30}>
            <Button icon={<AlertOutlined />} />
            <Link href="/account/profile">
              <Button icon={<UserOutlined />}>Профиль</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};
