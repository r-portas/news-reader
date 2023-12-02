"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children }: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div className={`p-2 ${isActive ? "bg-yellow-400 text-black" : undefined}`}>
      <NextLink href={href} className="uppercase">
        {children}
      </NextLink>
    </div>
  );
}
