// Layout.tsx
import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/router";
import { useFormState } from "react-dom";
import { FileDownIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import DownloadButton from "./DownloadButton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="shadow-lg p-2 mb-8 bg-neutral-100">
        <div className="flex justify-around p-2 bg-neutral-100">
          <div className="flex gap-8 items-center w-10 h-10">
            <Avatar>
              <AvatarImage src="logo-no-background.svg" />
              <AvatarFallback> logo</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      }
                    >
                      <span
                        className={
                          router.pathname === "/"
                            ? "font-extrabold text-lg text-black"
                            : "font-extrabold text-lg text-gray-500"
                        }
                      >
                        Home
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      }
                    >
                      <span
                        className={
                          router.pathname === "/about"
                            ? "font-extrabold text-lg text-black"
                            : "font-extrabold text-lg text-gray-500"
                        }
                      >
                        About
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      }
                    >
                      <span
                        className={
                          router.pathname === "/contact"
                            ? "font-extrabold text-lg text-black"
                            : "font-extrabold text-lg text-gray-500"
                        }
                      >
                        Contact
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center w-10 sm:gap-4 md:gap-8 gap-2">
            <Link href="https://github.com/liama2401?tab=repositories">
              <GithubIcon className="stroke-2" />
            </Link>
            <Link href="https://www.linkedin.com/in/liam-atkinson-11a9b1159/">
              <LinkedinIcon className="stroke-2" />
            </Link>
            <DownloadButton
              className="stroke-2"
              fileUrl={"/cv.pdf"}
              fileName={"liam_atkinson_cv.pdf"}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 pb-3 mb-[50px]">
        <div className="col-start-3 col-span-8"> {children} </div>
      </div>
      <footer className="fixed bottom-0 bg-white py-4 text-center w-full border border-t-neutral-100">
        <p>&copy; {new Date().getFullYear()} Made By Liam Atkinson.</p>
      </footer>
    </>
  );
};

export default Layout;
