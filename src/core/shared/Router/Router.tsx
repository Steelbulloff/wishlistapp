"use client";

import Friends from "@/app/account/friends/page";
import Gifts from "@/app/account/gifts/page";
import Profile from "@/app/account/profile/page";
import Settings from "@/app/account/settings/page";
import { usePathname } from "next/navigation"; // Импортируйте usePathname

export const MainContentRouter = () => {
  const pathname = usePathname(); // Получите текущий путь

  return (
    <>
      {pathname === "/account/profile" && <Profile />}
      {pathname === "/account/gifts" && <Gifts />}
      {pathname === "/account/friends" && <Friends />}
      {pathname === "/account/settings" && <Settings />}
    </>
  );
};
