"use client";
import { useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { HiOutlineLogout, HiOutlineUser } from "react-icons/hi";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden md:flex items-center justify-between px-6 py-4 shadow border-b">
      <div className="flex items-center space-x-6">
        <div>logo</div>
        <div className="hidden md:flex items-center space-x-4">
          <div>Home</div>
          <div>Pasien</div>
          <div>Priksa</div>
          {session?.user && session?.user.role === "ADMIN" ? (
            <Link href="/users">Users</Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        {" "}
        <Dropdown>
          <DropdownTrigger>
            <div className="rounded-full cursor-pointer border w-10 h-10 flex items-center justify-center">
              L
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownSection title={"Hello Azkal"}>
              <DropdownItem startContent={<HiOutlineUser />}>
                Manage Account
              </DropdownItem>
              <DropdownItem className="" startContent={<HiOutlineLogout />}>
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar;
