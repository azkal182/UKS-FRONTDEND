"use client";
import Link from "next/link";
import React from "react";
import {
  HiOutlineCreditCard,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi";
import { TbHealthRecognition } from "react-icons/tb";
const FloatingNavigation = () => {
  return (
    <div className="fixed md:hidden py-2 left-0 right-0 bottom-0 bg-background border-t shadow flex items-center justify-evenly">
      <Link className="flex flex-col items-center" href={"/"}>
        <HiOutlineHome className="w-6 h-6 stroke-2" />
        <span className="text-xs font-bold">Home</span>
      </Link>
      <Link className="flex flex-col items-center" href={"/"}>
        <TbHealthRecognition className="w-6 h-6 stroke-1" />
        <span className="text-xs">Priksa</span>
      </Link>
      <Link className="flex flex-col items-center" href={"/"}>
        <HiOutlineCreditCard className="w-6 h-6 stroke-1" />
        <span className="text-xs">KAS</span>
      </Link>
      <Link className="flex flex-col items-center" href={"/"}>
        <HiOutlineUser className="w-6 h-6 stroke-1" />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  );
};

export default FloatingNavigation;
