"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link className="font-bold text-xl" href={"/"}>
          Ecommerence
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6">
          <Link href={"/"}>Ana Sayfa</Link>
          <Link href={"/"}>Hakkımızda</Link>
          <Link href={"/"}>Ürünler</Link>
        </div>
        {/* Desktop Navbar */}

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <div
          className={
            "fixed inset-0 top-16 bg-background z-50 md:hidden " +
            (isMobileMenuOpen ? "flex flex-col" : "hidden")
          }
        >
          <div className="flex flex-col space-y-4 p-6">
            <Link href={"/"}>Ana Sayfa</Link>
            <Link href={"/"}>Hakkımızda</Link>
            <Link href={"/"}>Ürünler</Link>
          </div>
        </div>
        {/* Mobile Navbar */}

        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer">Dil</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Diller</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Türkçe</DropdownMenuItem>
              <DropdownMenuItem>İngilizce</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
