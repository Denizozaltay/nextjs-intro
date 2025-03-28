import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link className="font-bold text-xl" href={"/"}>
          Ecommerence
        </Link>

        <div className="flex space-x-6">
          <Link href={"/"}>Ana Sayfa</Link>
          <Link href={"/"}>Hakkımızda</Link>
          <Link href={"/"}>Ürünler</Link>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Dil</Button>
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
