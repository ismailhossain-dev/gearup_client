"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mountain,
  Search,
  Menu,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "./ThemeToggle";

// Role & User Types for Modular Auth Integration
export type UserRole = "CUSTOMER" | "PROVIDER" | "ADMIN";

export interface NavbarUser {
  name: string;
  email: string;
  avatarUrl?: string;
  role: UserRole;
}

interface NavbarProps {
  /** Pass current authenticated user or null/undefined if logged out */
  user?: NavbarUser | null;
  /** Optional callback function to trigger logout */
  onLogout?: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gear", label: "Explore Gear" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ user, onLogout }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  // Helper function to resolve dashboard URL according to user role
  const getDashboardHref = (role: UserRole) => {
    switch (role) {
      case "ADMIN":
        return "/dashboard/admin";
      case "PROVIDER":
        return "/dashboard/provider";
      case "CUSTOMER":
      default:
        return "/dashboard/customer";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-\[backdrop-filter\]\:bg-background\/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center space-x-2.5 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            aria-label="GearUp Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Mountain className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Gear<span className="text-primary">Up</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-foreground ${
                  isActive
                    ? "text-foreground font-semibold bg-accent/50"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Desktop Actions & User Menu */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle/>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-9 w-9 rounded-full p-0 ring-offset-background transition-opacity hover:opacity-90"
                >
                  <Avatar className="h-9 w-9 border border-border">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href={getDashboardHref(user.role)}
                    className="cursor-pointer"
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={onLogout}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
               <Button variant="ghost" asChild size="sm">
                <Link href="/register">Register</Link>
              </Button>
              
              <Button variant="ghost" asChild size="sm">
                <Link href="/login">Login</Link>
              </Button>
           
              <Button asChild size="sm">
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search Gear"
            className="text-muted-foreground"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-75 sm:87.5 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="text-left border-b pb-4">
                  <SheetTitle>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Mountain className="h-4 w-4" />
                      </div>
                      <span className="text-lg font-bold">
                        Gear<span className="text-primary">Up</span>
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-1 mt-6">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-3 py-2.5 text-base font-medium transition-colors rounded-md ${
                          isActive
                            ? "text-primary font-semibold bg-accent"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Footer / Auth Section */}
              <div className="border-t pt-4 space-y-3">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 px-2">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium leading-tight">
                          {user.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </div>
                    <Separator />
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={getDashboardHref(user.role)}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/profile">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      className="w-full justify-start"
                      onClick={() => {
                        setIsOpen(false);
                        onLogout?.();
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/auth/login">Login</Link>
                    </Button>
                    <Button
                      className="w-full"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/auth/register">Get Started</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
